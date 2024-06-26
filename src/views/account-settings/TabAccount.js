// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='First Name' placeholder='First Name' defaultValue='Lareb' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Last Name' placeholder='Last Name' defaultValue='Nawab' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder='Email'
              defaultValue='lareb.nawab@gmail.com'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Phone' placeholder='Contact Number' defaultValue='808 703 6184' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Address' placeholder='Full Address' defaultValue='1st Street, Park Avenue NY' />
          </Grid>          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label='Role' defaultValue='active'>
                <MenuItem value='active'>Ready to Mingle</MenuItem>
                <MenuItem value='hold'>It's Complicated</MenuItem>
                <MenuItem value='inactive'>Off the Market</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              multiline
              minRows={3}
              label='Summary'
              placeholder='Bio...'
              sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MessageOutline />
                  </InputAdornment>
                )
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <Box>
              <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                Upload Profile
                <input
                  hidden
                  type='file'
                  onChange={onChange}
                  accept='image/png, image/jpeg'
                  id='account-settings-upload-image'
                />
              </ButtonStyled>
              <ResetButtonStyled color='success' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                Download
              </ResetButtonStyled>
              <Typography variant='body2' sx={{ marginTop: 5 }}>
                Allowed PDF or DOCX. Max size of 2M.
              </Typography>
            </Box>
          </Grid>

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <Link href='/' onClick={e => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
