import { IReview } from "@helpers/types";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./ReviewsSlideshow.module.scss";
import Review from "@components/Review";
import { getReviews } from "@api/reviews";

type Props = {
  className?: string;
  animationDuration: number;
};

const ReviewsSlideshow: FC<Props> = ({ className = "", animationDuration }) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [index, setIndex] = useState(0);
  const timeoutId = useRef(0);

  useEffect(() => {
    const getReviewsFromServer = async () => {
      try {
        const { reviews } = await getReviews();

        setReviews(reviews);
      } catch {
        throw new Error("Can't load reviews");
      }
    };

    getReviewsFromServer();
  }, []);

  useEffect(() => {
    timeoutId.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        ),
      animationDuration
    );

    return () => clearInterval(timeoutId.current);
  }, [animationDuration, index, reviews.length]);

  return (
    <div className={`${styles.slideshow} ${className}`}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {reviews.map((review) => (
          <Review key={review.id} {...review} className={styles.slide} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlideshow;
