import styles from "styles/styles.module.scss";
import Button from '@mui/material/Button'

export default function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <div className={styles.formCard}>
      {currentStep < 9 && (
        <>
          {currentStep > 0 && (
            <Button
            fullWidth
            size='large'
            variant='contained'
            
            sx={{ marginBottom: 7 }}
              onClick={prevFormStep}
              type="button"
              
            >
              back
            </Button>
          )}

          {/* <span className={styles.steps}>Step {currentStep + 1} of 3</span> */}
        </>
      )}
      {children}
    </div>
  );
}
