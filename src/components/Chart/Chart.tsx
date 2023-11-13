import ChartSvg from "@assets/chart.svg?react";
import styles from "./Chart.module.scss";
import Chip from "@components/Chip";
import { FC } from "react";

type Props = {
  className: string;
}

const Chart: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`${styles.Chart} ${className}`}>
      <div className={styles.Chart__header}>
        <h3 className={styles.Chart__title}>
          Take a quiz to get a personalized plan
        </h3>

        {/* <Chip title={"Goal"} className={styles.Chart__chipTop} /> */}
      </div>

      <div style={{position: 'relative', width: '100%'}}>
        <ChartSvg className={styles.Chart__image} />
        <Chip title={"Goal"} className={styles.Chart__chipTop} />
        <Chip title={"You"} className={styles.Chart__chipBottom} />
      </div>

      <p className={styles.Chart__footer}>
        <span>WEEK 1</span>
        <span>WEEK 4</span>
      </p>
    </div>
  );
};

export default Chart;
