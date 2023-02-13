import React, { useState, useEffect } from 'react';
import Zoom from '@zoomus/websdk';
import { makeStyles } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Video from '@material-ui/icons/Videocam';
// import VideoCallIcon from '@mui/icons-material/VideoCall';
// import CallIcon from '@mui/icons-material/Call';
import Poll from 'mdi-material-ui/Poll'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const ZoomMeeting = () => {

    const zoom_sdk_key = 'bfPHOX7dzeqPM3D4BBKeNNtRlqmTvZGVltq1'
    const zoom_sdk_secret = '96sGdiTMbIntHVWGS21M5oVSNMfZxwSha3aR'

    const classes = useStyles();
    const [zoomInitialized, setZoomInitialized] = useState(false);
    const [meetingNumber, setMeetingNumber] = useState('');
    const [meetingPassword, setMeetingPassword] = useState('');

    useEffect(() => {
        Zoom.init({
            apiKey: zoom_sdk_key,
            apiSecret: zoom_sdk_secret,
            disableDrivers: ['electron'],
        });
        setZoomInitialized(true);
    }, []);

    const startMeeting = () => {
        const meetingConfig = {
            apiKey: 'zoom_sdk_key',
            meetingNumber: meetingNumber,
            userName: 'User Name',
            password: meetingPassword,
            leaveUrl: 'https://localhost:3000',
            success: function () { console.log('Join meeting success'); },
            error: function (res) { console.log(res); },
        };
        Zoom.join(meetingConfig);
    };

    return (
        <div className={classes.root}>
            <div>
                <input
                    type="text"
                    placeholder="Meeting number"
                    value={meetingNumber}
                    onChange={(e) => setMeetingNumber(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password (optional)"
                    value={meetingPassword}
                    onChange={(e) => setMeetingPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<Poll />}
                    onClick={startMeeting}
                    disabled={!zoomInitialized || !meetingNumber}
                >
                    Start Meeting
                </Button>
            </div>
        </div>
    );
};

export default ZoomMeeting;