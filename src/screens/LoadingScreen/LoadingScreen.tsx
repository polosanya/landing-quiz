// import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.scss";
import progressBars from "../../../public/data/progressBars.json";

import ProgressBar from "@components/ProgressBar";
import { useState } from "react";

const LoadingScreen = () => {
  const [activeProgressBarId, setActiveProgressBarId] = useState(1);

  const handleProgressBarComplete = () => {
    setActiveProgressBarId(activeProgressBarId + 1);
  };

  return (
    <>
      <h1>Loading...</h1>

      <h2>Development in progress</h2>

      <div className={styles.container}>
        {progressBars.progressBars.map((bar) => {
          return (
            <ProgressBar
              key={bar.id}
              onFinish={handleProgressBarComplete}
              isActive={activeProgressBarId === bar.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default LoadingScreen;
