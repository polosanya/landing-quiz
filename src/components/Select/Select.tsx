import { FC } from "react";
import styles from "./Select.module.scss";

type Props = {
  text: string;
  onClick: () => void;
};

const Select: FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.select} onClick={onClick}>
      {text}
    </button>
  );
};

export default Select;
