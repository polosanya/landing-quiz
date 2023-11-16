import ChartSvg from "@assets/chart.svg?react";
import styles from "./Chart.module.scss";
import Chip from "@components/Chip";
import { FC } from "react";

type Props = {
  className: string;
  title?: string;
  from?: string[];
  to?: string[];
};

const Chart: FC<Props> = ({
  className = "",
  title = "Take a quiz to get a personalized plan",
  from = ["You", "Week 1"],
  to = ["Goal", "Week 4"],
}) => {
  const [fromChip, fromDate] = from;
  const [toChip, toDate] = to;
  return (
    <div className={`${styles.chart} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.container}>
        <ChartSvg className={styles.image} />
        <Chip title={toChip} className={styles.chipTop} />
        <Chip title={fromChip} className={styles.chipBottom} />
      </div>

      <p className={styles.footer}>
        <span>{fromDate}</span>
        <span>{toDate}</span>
      </p>
    </div>
  );
};

export default Chart;
