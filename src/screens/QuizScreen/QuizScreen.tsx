import { Answer, Question } from "@helpers/types";
import styles from "./QuizScreen.module.scss";
import { FC, useRef, useState } from "react";
import Option from "@components/Option";
import ButtonPrimary from "@components/ButtonPrimary";
import Navigation from "@components/Navigation";

type Props = {
  questions: Question[];
};

const QuizScreen: FC<Props> = ({ questions }) => {
  const statistics = useRef({});
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedOptions, setSelectedOptions] = useState<Answer[]>([]);

  const handleSelect = (option: Answer, isSelected: boolean) => {
    return () => {
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
      // you can send the statistics somewhere if needed;


    } else {
      setCurrentQuestion((prevValue) => questions[prevValue.id]);
    }
  };

  return (
    <div className={styles.QuizScreen}>
      <Navigation />

      <h1>
        {currentQuestion.text} {currentQuestion.id}
      </h1>

      {currentQuestion.options.map((option) => {
        const isSelected = selectedOptions?.includes(option);

        return (
          <Option
            key={option.id}
            text={option.text}
            emoji={option.emoji}
            checked={isSelected}
            onChecked={handleSelect(option, isSelected)}
          />
        );
      })}

      <ButtonPrimary
        text="Continue"
        disabled={selectedOptions.length === 0}
        onClick={handleContinue}
      />
    </div>
  );
};

export default QuizScreen;
