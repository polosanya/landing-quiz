import { FC } from "react";
import styles from "./Popup.module.scss";
import ButtonSecondary from "@components/ButtonSecondary";
import { Progress } from "@helpers/types";

type Props = {
  onClose: (s: string) => void;
  bar: Progress;
  hint?: string;
};

const Popup: FC<Props> = ({
  onClose,
  bar,
  hint = "To move forward, specify",
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <span className={styles.hint}>{hint}</span>

        <h2 className={styles.title}>{bar.question}</h2>

        <div className={styles.buttons}>
          {bar.options.map((option) => (
            <ButtonSecondary
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
