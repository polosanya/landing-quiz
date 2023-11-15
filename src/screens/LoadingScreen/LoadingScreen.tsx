// import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.scss";
import progressBars from "../../../public/data/progressBars.json";

import ProgressBar from "@components/ProgressBar";
import { useState } from "react";
import Logo from "@components/Logo";
import Slideshow from "@components/Slideshow";
import { useQuizContext } from "src/context/QuizContext";

const LoadingScreen = () => {
  const { answersData } = useQuizContext();
  const [activeProgressBarId, setActiveProgressBarId] = useState(1);

  const handleProgressBarComplete = () => {
    if (activeProgressBarId === progressBars.progressBars.length) {
      console.log(answersData);
    } else {
      setActiveProgressBarId(activeProgressBarId + 1);
    }
  };

  return (
    <article className={styles.screen}>
      <Logo />

      <h1>We are crafting your personalized plan</h1>

      {progressBars.progressBars.map((bar) => {
        return (
          <ProgressBar
            bar={bar}
            key={bar.id}
            onFinish={handleProgressBarComplete}
            isActive={activeProgressBarId === bar.id}
          />
        );
      })}

      <Slideshow className={styles.slideshow} />
    </article>
  );
};

export default LoadingScreen;
