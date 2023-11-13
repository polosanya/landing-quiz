import { FC, useEffect, useRef, useState } from "react";
import styles from "./Slideshow.module.scss";
import { reviews } from "../../../public/data/reviews.json";
import Review from "@components/Review";
const delay = 5000;

type Props = {
  className?: string;
}


const Slideshow: FC<Props> = ({ className = '' }) => {
  const [index, setIndex] = useState(0);
  const timeoutId = useRef(0);

  useEffect(() => {
    timeoutId.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => clearInterval(timeoutId.current);
  }, [index]);

  return (
    <div className={`${styles.slideshow} ${className}`}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {reviews.map(review => (
          <Review key={review.id} {...review} className={styles.slide} />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
