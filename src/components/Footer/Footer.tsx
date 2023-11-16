import { FC, ReactNode } from "react";
import styles from "./Footer.module.scss";

type Props = {
  children: ReactNode;
};

const Footer: FC<Props> = ({ children }) => {
  return <section className={styles.footer}>{children}</section>;
};

export default Footer;
