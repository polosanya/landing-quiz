import Logo from "@components/Logo";
import styles from "./WelcomeScreen.module.scss";
import Chart from "@components/Chart";
import ButtonSecondary from "@components/ButtonSecondary";
import { MaritalStatus } from "@helpers/types";
import { FC, useEffect, useState } from "react";
import Footer from "@components/Footer";
import { useNavigate } from "react-router-dom";

const WelcomeScreen: FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<MaritalStatus>(MaritalStatus.Unknown);

  const handleChoose = (value: MaritalStatus) => {
    setStatus(value);
  };

  useEffect(() => {
    if (status !== MaritalStatus.Unknown) {
      navigate('/skills', { state: {status} })
    }
  }, [navigate, status]);
  
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
          <ButtonSecondary text={MaritalStatus.Single} onClick={handleChoose} />
          <ButtonSecondary text={MaritalStatus.Relation} onClick={handleChoose} />
        </div>
      </Footer>
    </div>
  );
};

export default WelcomeScreen;
