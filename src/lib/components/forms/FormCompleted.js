import { useEffect } from "react";


export default function FormCompleted() {
  // const { data } = useFormData();
    useEffect(() => {

        setTimeout(() => {
          window.location.href = "/profile"
        }, 2000)

    }, []);
  return (
    <>
      <h2>Thank you for your details, we are redirecting you to your profile! 🎉</h2>

    </>
  );
}
