import { FC } from "react";
import styles from "./Popup.module.scss";
import ButtonSecondary from "@components/ButtonSecondary";

type Props = {
  onClose: () => void;
  // children: ReactNode;
};

const Popup: FC<Props> = ({ onClose}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <span className={styles.hint}>
          To move forward, specify
        </span>

        <h2 className={styles.title}>
          Have you tried changing your love life before?
        </h2>

        <div className={styles.buttons}>
          <ButtonSecondary text="No" onClick={onClose} />
          <ButtonSecondary text="Yes" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
