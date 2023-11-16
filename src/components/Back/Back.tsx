import BackSvg from "@assets/back.svg?react";
import styles from "./Back.module.scss";
import { FC } from "react";

type Props = {
  className?: string;
  onBack: () => void;
};

const Back: FC<Props> = ({ className = "", onBack }) => {
  return (
    <BackSvg onClick={onBack} className={`${className} ${styles.button}`} />
  );
};

export default Back;
