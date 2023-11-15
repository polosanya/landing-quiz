import { FC } from "react";
import styles from "./Option.module.scss";

type Props = {
  text: string;
  emoji?: string;
  checked: boolean;
  className?: string;
  onChecked: () => void;
};

const Option: FC<Props> = ({
  text,
  emoji = "0x1F609",
  checked,
  className = "",
  onChecked,
}) => {
  return (
    <label
      className={`${className} ${styles.label} ${
        checked ? styles.selected : ""
      }`}
    >
      <span role="img" className={styles.emoji}>
        {String.fromCodePoint(Number(emoji))}
      </span>

      {text}

      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChecked}
      />
      <span
        className={`${styles.checkmark} ${checked ? styles.selected : ""}`}
      ></span>
    </label>
  );
};

export default Option;
