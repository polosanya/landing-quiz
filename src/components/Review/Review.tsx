import { FC } from "react";
import styles from "./Review.module.scss";
import starIMG from "@assets/stars.png";

type Props = {
  author: string;
  rating: number;
  text: string;
  className?: string;
};

const Review: FC<Props> = ({ author, rating, text, className = "" }) => {
  return (
    <section className={`${styles.review} ${className}`}>
      <div className={styles.info}>
        <h3 className={styles.author}>{author}</h3>

        <div className={styles.rating}>
          <img src={starIMG} alt="rating" className={styles.image}/>
          <span className={styles.count}>{rating.toFixed(1)}</span>
        </div>
      </div>

      <p className={styles.text}>{text}</p>
    </section>
  );
};

export default Review;
