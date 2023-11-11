import Logo from "@components/Logo";
import styles from "./WelcomeScreen.module.scss";
import Chart from "@components/Chart";

const WelcomeScreen = () => {
  return (
    <div className={styles.WelcomeScreen}>
      <Logo className={styles.WelcomeScreen__logo} />

      <h1 className={styles.WelcomeScreen__title}>
        Change your{" "}
        <strong className={styles.WelcomeScreen__strong}>love life</strong>
      </h1>

      <p className={styles.WelcomeScreen__text}>
        with easy-to-use practical tips that you can apply in any situation
      </p>

      <Chart />

      <h2 className={styles.WelcomeScreen__question}>
        What is your relationship status?
      </h2>
    </div>
  );
};

export default WelcomeScreen;
