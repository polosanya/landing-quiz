import Popup from "@components/Popup";
import { FC, useEffect, useMemo, useState } from "react";
import { useQuizContext } from "src/context/QuizContext";
import styles from "./ProgressModal.module.scss";
import { IAdditionalQuestion } from "@helpers/types";

type Props = {
  onFinish: () => void;
  isActive: boolean;
  question: IAdditionalQuestion;
  progressDuration?: number;
};

const ProgressModal: FC<Props> = ({
  onFinish,
  isActive,
  question,
  progressDuration = 3000,
}) => {
  const [count, setCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { updateAnswersData } = useQuizContext();
  const percentDuration = useMemo(
    () => progressDuration / 100,
    [progressDuration]
  );

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
    }, percentDuration);

    return () => clearInterval(interval);
  }, [isActive, isModalVisible, onFinish, percentDuration]);

  const closeModal = (slug: string) => {
    const newData = { [`${question.slug}`]: [slug] };
    updateAnswersData(newData);
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

      {isModalVisible && <Popup question={question} onClose={closeModal} />}
    </div>
  );
};

export default ProgressModal;
