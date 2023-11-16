import Logo from '@components/Logo';
import styles from './Navigation.module.scss';
import Progress from '@components/Progress';
import Back from '@components/Back';
import { FC } from 'react';

type Props = {
  total: number;
  current: number;
  onBack: () => void;
}

const Navigation: FC<Props> = ({ total, current, onBack}) => {
  return (
    <div className={styles.nav}>
      <Progress current={current} full={total} />
      <div className={styles.main}>
        <Back onBack={onBack} />
        
        <Logo />

        <div className={styles.count}>
          <span className={styles.current}>
            {current}
          </span>
          <span className={styles.total}>
            {`/${total}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navigation;