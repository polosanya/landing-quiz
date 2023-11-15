import Chart from "@components/Chart";
import Footer from "@components/Footer";
import Logo from "@components/Logo";
import Select from "@components/Select";
import { MaritalStatus, RoutesType } from "@helpers/types";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "src/context/QuizContext";
import styles from "./WelcomeScreen.module.scss";

const WelcomeScreen: FC = () => {
  const navigate = useNavigate();
  const { maritalStatus, changeStatus } = useQuizContext();

  // const handleChoose = (value: MaritalStatus) => {
  //   setStatus(value);
  // };

  useEffect(() => {
    if (maritalStatus !== MaritalStatus.Unknown) {
      navigate(RoutesType.Skills);
    }
  }, [navigate, maritalStatus]);

  return (
    <div className={styles.screen}>
      <Logo className={styles.logo} />

      <h1 className={styles.title}>
        Change your <strong className={styles.strong}>love life</strong>
      </h1>

      <p className={styles.text}>
        with easy-to-use practical tips that you can apply in any situation
      </p>

      <Chart className={styles.chart} />

      <Footer>
        <h2 className={styles.question}>What is your relationship status?</h2>

        <div className={styles.answers}>
          <Select text={MaritalStatus.Single} onClick={changeStatus} />
          <Select
            text={MaritalStatus.Relation}
            onClick={changeStatus}
          />
        </div>
      </Footer>
    </div>
  );
};

export default WelcomeScreen;
