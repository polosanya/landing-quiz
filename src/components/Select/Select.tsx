import { FC } from "react";
import styles from "./Select.module.scss";
// import { MaritalStatus } from "@helpers/types";

type Props = {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (value: any) => void;
};

const Select: FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.select} onClick={() => onClick(text)}>
      {text}
    </button>
  );
};

export default Select;
