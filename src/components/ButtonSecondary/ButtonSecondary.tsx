import { FC } from "react";
import styles from "./ButtonSecondary.module.scss";
import { MaritalStatus } from "@helpers/types";

type Props = {
  text: string;
  onClick: (value: MaritalStatus) => void;
};

const ButtonSecondary: FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.ButtonSecondary} onClick={() => onClick(text)}>
      {text}
    </button>
  );
};

export default ButtonSecondary;
