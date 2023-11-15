import { getAdditionalQuestions } from "@api/questions";
import Loader from "@components/Loader/Loader";
import Logo from "@components/Logo";
import ProgressModal from "@components/ProgressModal";
import { IAdditionalQuestion } from "@helpers/types";
import { useEffect, useState } from "react";
import { useQuizContext } from "src/context/QuizContext";
import styles from "./LoadingScreen.module.scss";
import ReviewsSlideshow from "@components/ReviewsSlideshow";

const LoadingScreen = () => {
  const { answersData } = useQuizContext();
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<IAdditionalQuestion[]>([]);
  const [activeQuestionId, setActiveQuestionId] = useState(1);

  useEffect(() => {
    const getQuestionsFromServer = async () => {
      try {
        setIsLoading(true);
        const { additionalQuestions } = await getAdditionalQuestions();

        setQuestions(additionalQuestions);
        setActiveQuestionId(additionalQuestions[0].id);
      } catch {
        throw new Error("Can't load questions");
      }

      setIsLoading(false);
    };

    getQuestionsFromServer();
  }, []);

  const handleProgressModalComplete = () => {
    if (activeQuestionId === questions.length) {
      console.log(answersData);
    } else {
      setActiveQuestionId(activeQuestionId + 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <article className={styles.screen}>
          <Logo />

          <h1>We are crafting your personalized plan</h1>

          {questions.map((question) => {
            return (
              <ProgressModal
                question={question}
                key={question.id}
                onFinish={handleProgressModalComplete}
                isActive={activeQuestionId === question.id}
              />
            );
          })}

          <ReviewsSlideshow className={styles.slideshow} animationDuration={3000} />
        </article>
      )}
    </>
  );
};

export default LoadingScreen;
