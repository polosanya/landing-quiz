// Alternative way to add chart
// import Chart from "@components/Chart"; 
import ChartSvg from "@assets/chartImage.svg?react";
import Logo from "@components/Logo";
import { MaritalStatus, RoutesType } from "@helpers/types";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "src/context/QuizContext";
import styles from "./WelcomeScreen.module.scss";
import Select from "@components/Select";

const WelcomeScreen: FC = () => {
  const navigate = useNavigate();
  const { maritalStatus, changeStatus } = useQuizContext();

  useEffect(() => {
    if (maritalStatus !== MaritalStatus.Unknown) {
      navigate(RoutesType.Skills);
    }
  }, [navigate, maritalStatus]);

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <Logo className={styles.logo} />

        <h1 className={styles.title}>
          Change your <strong className={styles.strong}>love life</strong>
        </h1>

        <p className={styles.text}>
          with easy-to-use practical tips that you can apply in any situation
        </p>
      </div>

      <ChartSvg className={styles.chart} />

      <div className={styles.footer}>
        <h2 className={styles.question}>What is your relationship status?</h2>

        <div className={styles.answers}>
          <Select text={MaritalStatus.Single} onClick={() => changeStatus(MaritalStatus.Single)} />
          <Select text={MaritalStatus.Relation} onClick={() => changeStatus(MaritalStatus.Relation)} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
