import { useState, useRef } from "react";
import FormCard from "src/lib/components/forms/FormCard";
import {
  BillingInfo,
  PersonalInfo,
  RoleInfo,
  CredentialsInfo,
  SpecialistInfo,
  AchivemenntInfo,
  CertificationsCourseInfo,
  SkillsInfo,
  ComfortInfo,
  JobHuntStatus,
} from "src/lib/components/forms/Forms";
import FormCompleted from "src/lib/components/forms/FormCompleted";

import styles from "styles/styles.module.scss";
// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'

const Card = styled(MuiCard)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '28rem' }
  }))
  import themeConfig from 'src/configs/themeConfig'
  const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary
    }
  }))
  import Link from 'next/link'
import { useRouter } from 'next/router'
const Signin = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div> 
       
      <div className={styles.container}>
        <Grid container>
        <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
          {formStep >= 0 && (
            <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 1 && (
            <BillingInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 2 && (
            <RoleInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 3 && (
            <CredentialsInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 4 && (
            <SpecialistInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 5 && (
            <AchivemenntInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 6 && (
            <CertificationsCourseInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 7 && (
            <SkillsInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 8 && (
            <ComfortInfo formStep={formStep} nextFormStep={nextFormStep} />
          )}

          {formStep == 9 && <FormCompleted />}
        </FormCard>
      </Grid>
       </div>
    </div>
  
  );
};

export default Signin;