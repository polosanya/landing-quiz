import styles from "./Progress.module.scss";
import { FC } from "react";

type Props = {
  current: number;
  full: number;
};

const Progress: FC<Props> = ({ current, full }) => {
  const progressWidth = current <= full ? (current / full) * 100 : 100;

  return (
    <div className={styles.shell}>
      <div style={{ width: `${progressWidth}%` }} className={styles.progress} />
    </div>
  );
};

export default Progress;
