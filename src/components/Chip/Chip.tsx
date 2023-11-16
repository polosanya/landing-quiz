import { FC } from "react";
import styles from "./Chip.module.scss";

type Props = {
  title: string;
  className?: string;
};

const Chip: FC<Props> = ({ title, className = '' }) => {
  return (
    <div className={`${styles.chip} ${className}`}>
      {title}
    </div>
  );
};

export default Chip;
