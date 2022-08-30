import { useRef,useState } from "react";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";
import axios from 'axios';
export default function ConfirmAccount({ formStep, nextFormStep }) {
  const formRef = useRef();
  const [error , setError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [success , setSuccess] = useState(false);
  const [successMessage, setsuccessMessage] = useState("");

  async function handleSubmit(data) {
    if(data.password !== data.confirmpassword){
      setError(true);
    seterrorMessage("Password and Confirm Password should be same.");
    return
    }
    setError(false);
    const modifiedData = {
      "token": "BDsz4zXB_3zY2Tqe1hyv",
      "password": data.password,
      "password_confirmation": data.confirmpassword
    }
    try {
      const response = await axios.post('http://localhost:3000/api/v1/accounts/confirmation', {
        accounts: modifiedData,
      });
      // console.log(response);
      if(response){
        setSuccess(true);
        setsuccessMessage("Account has been confirmed, please login to the Portal");
      }
    } catch (error) {
      setError(true);
      seterrorMessage("Something went wrong.");
      setTimeout(() => {
        setError(false)
    }, 6000);
    }

  }

  return (
    <div className={styles.container}>
      <h2>Confirm Account</h2>
      <div className={styles.formCard}>
      <Form ref={formRef} onSubmit={handleSubmit}>
      <div className={styles.formRow} style={{width : "100%"}}>
          <Input name="email" label="Email" type="text" value="test@test.com" disabled style={{backgroundColor : "#ddd"}} autoComplete="off" />
        </div>
        <div className={styles.formRow} style={{width : "100%"}}>
          <Input name="password" label="Password" type="password" autoComplete="off" minLength={8} maxLength={20} required />
          <div>Your password must be 8-20 charaters long, contain letters and numbers and must not contain spaces, special characters or emoji.</div>
        </div>
        <div className={styles.formRow} style={{width : "100%"}}>
          <Input name="confirmpassword" label="Confirm Password" type="password" autoComplete="off"  minLength={8} maxLength={20} required />
          <div>Your password must be 8-20 charaters long, contain letters and numbers and must not contain spaces, special characters or emoji.</div>
        </div>
        {success ? <div className="success-message">{successMessage}</div> : ""}
        {error ? <div className="error-message">{errorMessage}</div> : ""}
        <button className={styles.nextbutton} type="submit" disabled={success}>Submit</button>
      </Form>
      </div>
    </div>
  );
}
