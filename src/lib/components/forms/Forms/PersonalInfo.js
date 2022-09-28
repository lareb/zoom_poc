// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

import { useRef,useState } from "react";
import styles from "styles/styles.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import themeConfig from 'src/configs/themeConfig'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
  const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary
    }
  }))
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'

const LinkStyled = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: 'white'
}))

export default function PersonalInfo({ formStep, nextFormStep }) {
  const [options , setoptions] = useState([ { title: 'The Great Dictator', url: "www.sanchiti.com" }, { title: 'Cinema Paradiso', url: "www.sanchiti.com" }])
  const [value, setValue] = useState(null);
  const [url, setUrl] = useState('');
  const [error , setError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  const formRef = useRef();

  async function handleSubmit(data) {
  //   console.log(data)
  //  let domain = url.replace('www.','');
  //  var domain1 = data.email.substring(data.email.lastIndexOf("@") +1);
  //  if(domain != domain1) {
  //   setError(true)
  //   seterrorMessage("domain should be matched");
  //   return
  //  }
  //  setError(false)
    try {
      // formRef.current.setErrors({});
      nextFormStep();
    } catch (err) {
      
    }
  }
const companyValue = (value) => {
  if(value){
    setValue(value);   
    setUrl(value.url);        
  }else{
    setValue(null)
    setUrl("") 
  }
}
  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
          <Grid item xs={12} sm={12}>
            <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
              <Typography variant='h4' sx={{ marginBottom: 3.5, textAlign: 'center' }}>
                What TYPE OF POSITION you are looking for? (Check all that apply)
              </Typography>
              
              <Grid
                item
                sm={5}
                xs={12}
                sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
              >

              </Grid>
              <Form ref={formRef} onSubmit={handleSubmit}>  
                <Grid container spacing={12}>
                  <Grid item xs={12} sm={6}>
                    <StyledBox>
                      <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                        <FormControlLabel control={<Checkbox />} label='Per Diem' />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <FormControlLabel control={<Checkbox />} label='Part Time' /> 
                      </Box>
                    </StyledBox>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                      <FormControlLabel control={<Checkbox />} label='Contract' />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <FormControlLabel control={<Checkbox />} label='Full-Time/Permanent' />
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  item
                  sm={5}
                  xs={12}
                  sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
                >

                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      gap: 5,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >

                      <Box sx={{ display: 'flex', alignItems: 'right' }}>
                        <Button variant='contained' size='large' href='/job_status/'>
                          <LinkStyled>Prev</LinkStyled>
                        </Button>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'right' }}>
                        <Button type="submit" variant='contained' size='large' >
                          <LinkStyled>Next</LinkStyled>
                        </Button>
                      </Box>
                    </Box>
                </Grid>
                
              </Form>
            </CardContent>
          </Grid>
         
          
        

    </div>
  );
}
