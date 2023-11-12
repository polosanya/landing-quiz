import LogoSvg from "@assets/logo.svg?react";
import { FC } from "react";

type Props = {
    className?: string;
};

const Logo: FC<Props> = ({ className = '' }) => {
  return <LogoSvg className={className} />;
};

export default Logo;
