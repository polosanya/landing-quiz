import Logo from "@components/Logo";
import styles from "./EmailScreen.module.scss";
import ButtonPrimary from "@components/ButtonPrimary";
import Input from "@components/Input";
import { useState } from "react";

const EmailScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState('');

  let validationTimeout: number; 

  const validateEmail = (value: string) => {
    const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValuePresent = Boolean(value.trim());
    const isFormatCorrect = value.match(emailValidationRegex);
    
    if (!isValuePresent) {
      setError("Please enter email");
    } else if (!isFormatCorrect) {
      setError("Email should have the correct form");
    } else if (isValuePresent && isFormatCorrect) {
      setError('');
    } 
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value.trim());

    clearTimeout(validationTimeout);

    validationTimeout = setTimeout(() => {
      validateEmail(value);
    }, 500);
  };

  const handleSubmit = () => {
    if (!email) {
      validateEmail(email);
    } else {
      console.log(`Submitted ${email}`)
    }
  }

  return (
    <div className={styles.page}>
      <Logo />

      <h1 className={styles.title}>You're almost done!</h1>

      <h2 className={styles.subtitle}>
        Please enter your email to see results
      </h2>

      <Input
        value={email}
        onChange={handleEmailChange}
        validationError={error}
      />

      <ButtonPrimary text="Get results" onClick={handleSubmit} />
    </div>
  );
};

export default EmailScreen;
