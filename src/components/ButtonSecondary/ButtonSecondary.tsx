import { FC } from "react";
import styles from "./ButtonSecondary.module.scss";
// import { MaritalStatus } from "@helpers/types";

type Props = {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (value: any) => void;
};

const ButtonSecondary: FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.ButtonSecondary} onClick={() => onClick(text)}>
      {text}
    </button>
  );
};

export default ButtonSecondary;
