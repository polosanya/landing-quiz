import ButtonPrimary from "@components/ButtonPrimary";
import { useState, useEffect, FC } from "react";
import styles from "./ProgressBar.module.scss";

type Props = {
  onFinish: () => void;
  isActive: boolean;
};

const ProgressBar: FC<Props> = ({ onFinish, isActive }) => {
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
    }, 50);

    return () => clearInterval(interval);
  }, [isActive, isModalVisible, onFinish]);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className={styles.shell}>
        <div style={{ width: `${count}%` }} className={styles.progress} />

        {count}%
      </div>

      {isModalVisible && count !== 100 && (
        <ButtonPrimary text="Click on me" onClick={closeModal} />
      )}
    </>
  );
};

export default ProgressBar;
