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
      <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
            What sort of position are you into?
            </Typography>           
      </Box>
      <Form ref={formRef} onSubmit={handleSubmit}>      
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'normal' }}
            >
              <FormControlLabel control={<Checkbox />} label='Per Diem' />
              <FormControlLabel control={<Checkbox />} label='Part Time' style={{marginLeft : "20px"}} />              
            </Box>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'normal' }}
            >
              <FormControlLabel control={<Checkbox />} label='Contract' />
              <FormControlLabel control={<Checkbox />} label='Full-Time/Permanent' style={{marginLeft : "20px"}} />
            </Box>
       
            <Button
              fullWidth
              size='large'
              variant='contained'
              type="submit"
              sx={{ marginBottom: 7 }}
              // onClick={() => router.push('/')}
            >
              Next
            </Button>
      </Form>
    </div>
  );
}
