import { useRef } from "react";
import styles from "styles/styles.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";


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

export default function BillingInfo({ formStep, nextFormStep }) {
  //const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      // Validation passed - do something with data
      //setFormValues(data);
      nextFormStep();
    } catch (err) {
      
    }
  }

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
     
     <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
            What sort of position are you into?
            </Typography>           
      </Box>
      <Form ref={formRef} onSubmit={handleSubmit}>      
          <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'normal' }}
            >
              <FormControlLabel control={<Checkbox />} label='Radiology/Imaging' />
              <FormControlLabel control={<Checkbox />} label='Healthcare Management (Clinical)' style={{marginLeft : "20px"}} />              
            </Box>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'normal' }}
            >
              <FormControlLabel control={<Checkbox />} label='Advanced Practice' />
              <FormControlLabel control={<Checkbox />} label='Healthcare Management (Non-Clinical)' style={{marginLeft : "20px"}} />
            </Box>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'normal' }}
            >
              <FormControlLabel control={<Checkbox />} label='Rehab/Therapy' />
              <FormControlLabel control={<Checkbox />} label='Pharmacy' style={{marginLeft : "20px"}} />
            </Box>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'normal' }}
            >
              <FormControlLabel control={<Checkbox />} label='Lab Sciences' />
              <FormControlLabel control={<Checkbox />} label='Nursing' style={{marginLeft : "20px"}} />
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
