import { useRef } from "react";
import styles from "styles/styles.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";

import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import themeConfig from 'src/configs/themeConfig'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
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

export default function AchivementInfo({ formStep, nextFormStep }) {
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
    <div className={formStep === 5 ? styles.showForm : styles.hideForm}>
     
     <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
            What's your highest level of achievement?
            </Typography>           
      </Box>
      <Form ref={formRef} onSubmit={handleSubmit}>      
          
            <Grid item xs={12} sm={6}>
            <FormControl>
              {/* <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel> */}
              <RadioGroup  aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel fullWidth value='Associates of Science in Respiratory Care' label='Associates of Science in Respiratory Care' control={<Radio />} />
                <FormControlLabel  value='Bachelor of Science in Respiratory Care' label='Bachelor of Science in Respiratory Care' control={<Radio />} />
                <FormControlLabel  value='Master of Science in Respiratory Care' label='Master of Science in Respiratory Care' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>
       
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
