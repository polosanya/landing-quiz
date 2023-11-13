import { useState, useEffect, FC } from "react";
import styles from "./ProgressBar.module.scss";
import Popup from "@components/Popup";

type Props = {
  onFinish: () => void;
  isActive: boolean;
  label: string;
};

const ProgressBar: FC<Props> = ({ onFinish, isActive, label }) => {
  const [count, setCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      if (!isModalVisible) {
        setCount((prevProgress) => {
          const newProgress = prevProgress + 1;

          if (newProgress === 50) {
            setIsModalVisible(true);
          } else if (newProgress === 100) {
            clearInterval(interval);
            onFinish();
          }

          return newProgress;
        });
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isActive, isModalVisible, onFinish]);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3 className={styles.title}>{label}</h3>
        <span className={styles.count}>{count}%</span>
      </div>

      <div className={styles.shell}>
        <div style={{ width: `${count}%` }} className={styles.progress} />
      </div>

      {isModalVisible && (
        <Popup onClose={closeModal} />
      )}
    </div>
  );
};

export default ProgressBar;
