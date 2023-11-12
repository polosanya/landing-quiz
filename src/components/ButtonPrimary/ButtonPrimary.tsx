import { FC } from "react";
import styles from "./ButtonPrimary.module.scss";

type Props = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

const ButtonPrimary: FC<Props> = ({ text, disabled = false, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
