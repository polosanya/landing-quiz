import { Answer, Question } from "@helpers/types";
import styles from "./QuizScreen.module.scss";
import { FC, useEffect, useRef, useState } from "react";

type Props = {
  questions: Question[];
};

const QuizScreen: FC<Props> = ({ questions }) => {
  const statistics = useRef({});
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedOptions, setSelectedOptions] = useState<Answer[]>([]);

  const handleSelect = (option: Answer) => {
    return () => {
      const isSelected = selectedOptions?.includes(option);

      setSelectedOptions((prevValues) =>
        isSelected
          ? prevValues.filter((value) => value !== option)
          : [...prevValues, option]
      );
    };
  };

  const handleContinue = () => {
    statistics.current = {
      ...statistics.current,
      [`${currentQuestion.id}: ${currentQuestion.text}`]: selectedOptions,
    }
    setSelectedOptions([]);
    
    if (currentQuestion.id === questions.length) {
      console.log("FINISH", statistics.current);
    } else {
      setCurrentQuestion((prevValue) => questions[prevValue.id]);
    }
  };

  return (
    <div className={styles.QuizScreen}>
      <h1>
        {currentQuestion.text} {currentQuestion.id}
      </h1>

      {currentQuestion.options.map((option) => {
        const isSelected = selectedOptions?.includes(option);

        return (
          <button
            className={styles.QuizScreen__option}
            style={{ backgroundColor: `${isSelected ? "red" : "white"}` }}
            key={option.id}
            onClick={handleSelect(option)}
          >
            {option.text}
          </button>
        );
      })}

      <button
        disabled={selectedOptions.length === 0}
        className={styles.QuizScreen__button}
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default QuizScreen;
