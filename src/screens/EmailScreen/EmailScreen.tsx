import Logo from "@components/Logo";
import styles from "./EmailScreen.module.scss";
import ButtonPrimary from "@components/ButtonPrimary";
import Input from "@components/Input";
import { useState } from "react";
import Policy from "@components/Policy";
import { useNavigate } from "react-router-dom";
import { RoutesType } from "@helpers/types";
import { useQuizContext } from "src/context/QuizContext";

const EmailScreen = () => {
  const navigate = useNavigate();
  const { email, updateEmail } = useQuizContext();
  // const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
      setError("");
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    updateEmail(value.trim());

    clearTimeout(validationTimeout);

    validationTimeout = setTimeout(() => {
      validateEmail(value);
    }, 500);
  };

  const handleSubmit = () => {
    if (!email || error) {
      validateEmail(email);
    } else {
      navigate(RoutesType.Loading);
    }
  };

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

      <Policy>
        We respect your privacy and are committed to protecting your personal
        data. We’ll email you a copy of your results for convenient access.
      </Policy>
    </div>
  );
};

export default EmailScreen;
