import LogoSvg from "@assets/logo.svg?react";
import { FC } from "react";
import styles from './Logo.module.scss';

type Props = {
    className?: string;
};

const Logo: FC<Props> = ({ className = '' }) => {
  return <LogoSvg className={`${className} ${styles.logo}`} />;
};

export default Logo;
