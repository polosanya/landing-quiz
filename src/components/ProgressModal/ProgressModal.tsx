import Popup from "@components/Popup";
import { AdditionalQuestion } from "@helpers/types";
import { FC, useEffect, useState } from "react";
import { useQuizContext } from "src/context/QuizContext";
import styles from "./ProgressModal.module.scss";

type Props = {
  onFinish: () => void;
  isActive: boolean;
  question: AdditionalQuestion;
};

const ProgressModal: FC<Props> = ({ onFinish, isActive, question }) => {
  const [count, setCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { updateAnswersData } = useQuizContext();

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

  const closeModal = (slug: string) => {
    const newData = {[`${question.slug}`]: [slug]}
    updateAnswersData(newData)
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3 className={styles.title}>{question.text}</h3>
        <span className={styles.count}>{count}%</span>
      </div>

      <div className={styles.shell}>
        <div style={{ width: `${count}%` }} className={styles.progress} />
      </div>

      {isModalVisible && (
        <Popup question={question} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProgressModal;
