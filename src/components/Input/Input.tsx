import { FC, useState } from "react";
import styles from "./Input.module.scss";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  validationError: string;
  name?: string;
  autoComplete?: string;
};

const Input: FC<Props> = ({
  value,
  onChange,
  placeholder = "example@gmail.com",
  validationError = "",
  name = "email",
  autoComplete = "email",
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouched = () => {
    setIsTouched(true);
  }

  return (
    <label className={styles.label}>
      <input
        value={value}
        onChange={onChange}
        className={`${styles.input} ${validationError && styles.error}`}
        placeholder={placeholder}
        onFocus={handleTouched}
        name={name}
        autoComplete={autoComplete}
      />

      {validationError && isTouched && (
        <span className={styles.errorText}>{validationError}</span>
      )}
    </label>
  );
};

export default Input;
