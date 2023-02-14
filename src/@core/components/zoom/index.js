// ** React Imports
import React from 'react';
import { useState, useEffect } from "react";

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import axios from 'axios';


// ** Icons Imports
import Close from 'mdi-material-ui/Close'

import { ZoomMtg } from '@zoomus/websdk';
// import styles from "styles/zoom.scss";
import styles from "styles/styles.module.scss";

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.9.7/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');


const ZoomSDK = () => {
    // ** State
    const [meetingId, setMeetingId] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        // TODO: This should move to CSS/SCSS
        document.getElementById('zmmtg-root').style.display = 'none';
    }, []);

    const onSubmit = (e) => {
        getSignature(e)
    }

    // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
    // const signatureEndpoint = 'http://ec2-13-233-133-180.ap-south-1.compute.amazonaws.com/api/v1/filters/zoom_signature'

    // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
    // https://us05web.zoom.us/j/85914734918?pwd=Tm04ZzFyRG1vQlVaWDAzQ2VsTEg2dz09
    const sdkKey = 'bfPHOX7dzeqPM3D4BBKeNNtRlqmTvZGVltq1'
    // const meetingNumber = '85914734918'
    const role = 0
    const leaveUrl = '/profile'
    // const userName = 'Lareb'
    // const userEmail = 'lareb.indore@gmail.com'
    const passWord = '12345'

    // pass in the registrant's token if your meeting or webinar requires registration. More info here:
    // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
    // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
    const registrantToken = ''


    const getSignature = async (e) => {
        e.preventDefault();
        // if (data.password !== data.confirmpassword) {
        //     setError(true);
        //     seterrorMessage("Password and Confirm Password should be same.");
        //     return
        // }
        // setError(false);
        try {
            const response = await axios.post('/api/v1/filters/zoom_signature', {
                meetingNumber: meetingId,
                role: role,
            });
            // console.log(response);
            if (response) {
                console.log(response)
                startMeeting(response.signature)
                // setSuccess(true);
                // setsuccessMessage("Account has been confirmed, please login to the Portal");
            }
        } catch (error) {
            console.log(error, "============")
            // setError(true);
            // seterrorMessage("Something went wrong.");
            // setTimeout(() => {
            //     setError(false)
            // }, 6000);
        }

    }


    const getSignatureBKP = (e) => {
        e.preventDefault();

        fetch(signatureEndpoint, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            // headers: { 'Content-Type': 'application/json', 'crossorigin': true },
            body: JSON.stringify({
                meetingNumber: meetingId,
                role: role
            })
        }).then(res => res.json())
            .then(response => {
                startMeeting(response.signature)
            }).catch(error => {
                console.error(error)
            })
    }

    const startMeeting = (signature) => {
        document.getElementById('zmmtg-root').style.display = 'block'

        ZoomMtg.init({
            leaveUrl: leaveUrl,
            success: (success) => {
                console.log(success)

                ZoomMtg.join({
                    signature: signature,
                    meetingNumber: meetingId,
                    userName: fullName,
                    sdkKey: sdkKey,
                    userEmail: email,
                    passWord: passWord,
                    tk: registrantToken,
                    success: (success) => {
                        console.log(success)
                    },
                    error: (error) => {
                        console.log(error)
                    }
                })

            },
            error: (error) => {
                console.log(error)
            }
        })
    }

    return (
        <Card>
            <CardContent>
                <Typography variant='h5'>Please Provide details to start the Online Class</Typography>
                <form onSubmit={getSignature}>
                    <Grid container spacing={7} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label='Meeting ID'
                                placeholder='Meeting ID'
                                // defaultValue='Lareb Nawab' 
                                onChange={(e) => setMeetingId(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label='Full Name'
                                placeholder='First Name'
                                // defaultValue='Lareb Nawab' 
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                type='email'
                                label='Email'
                                placeholder='Email'
                                // defaultValue='lareb.nawab@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button type='submit' variant='contained' sx={{ marginRight: 3.5 }}>
                                Let's Start
                            </Button>
                            <Button type='reset' variant='outlined' color='secondary'>
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>

        // <div>
        //     <main>
        //         <h1>Please provide details to start the Online Session</h1>

        //         <button onClick={getSignature}>Join Meeting</button>
        //     </main>
        // </div>
    );
}

export default ZoomSDK;


