import { AdditionalQuestion } from "@helpers/types";
import { FC } from "react";
import styles from "./Popup.module.scss";
import Select from "@components/Select";

type Props = {
  onClose: (s: string) => void;
  question: AdditionalQuestion;
  hint?: string;
};

const Popup: FC<Props> = ({
  onClose,
  question,
  hint = "To move forward, specify",
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <span className={styles.hint}>{hint}</span>

        <h2 className={styles.title}>{question.question}</h2>

        <div className={styles.buttons}>
          {question.options.map((option) => (
            <Select
              key={option.id}
              text={option.text}
              onClick={() => onClose(option.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
