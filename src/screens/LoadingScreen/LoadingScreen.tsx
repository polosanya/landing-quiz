// import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.scss";
import progressBars from "../../../public/data/progressBars.json";

import ProgressBar from "@components/ProgressBar";
import { useState } from "react";
import Logo from "@components/Logo";
import Slideshow from "@components/Slideshow";
import Footer from "@components/Footer";

const LoadingScreen = () => {
  const [activeProgressBarId, setActiveProgressBarId] = useState(1);

  const handleProgressBarComplete = () => {
    setActiveProgressBarId(activeProgressBarId + 1);
  };

  return (
    <article className={styles.screen}>
      <Logo />

      <h1>We are crafting your personalized plan</h1>

      {progressBars.progressBars.map((bar) => {
        return (
          <ProgressBar
            label={bar.text}
            key={bar.id}
            onFinish={handleProgressBarComplete}
            isActive={activeProgressBarId === bar.id}
          />
        );
      })}

      <Footer>
        <Slideshow />
      </Footer>
    </article>
  );
};

export default LoadingScreen;
