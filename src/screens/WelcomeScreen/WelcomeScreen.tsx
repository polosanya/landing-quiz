import Logo from "@components/Logo";
import styles from "./WelcomeScreen.module.scss";

const WelcomeScreen = () => {
  return (
    <div className={styles.WelcomeScreen}>
        <Logo />

      <h2 className={styles.WelcomeScreen__logo}>Welcome!</h2>
    </div>
  );
};

export default WelcomeScreen;
