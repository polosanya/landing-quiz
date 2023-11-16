import { FC } from "react";
import styles from "./Policy.module.scss";
import PolicySvg from "@assets/policy.svg?react";

type Props = {
  children: string;
};

const Policy: FC<Props> = ({ children }) => {
  return (
    <div className={styles.paragraph}>
      <PolicySvg className={styles.icon} />

      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default Policy;
