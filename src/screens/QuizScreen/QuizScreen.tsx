import { Answer, Question } from "@helpers/types";
import styles from "./QuizScreen.module.scss";
import { FC, useState } from "react";
import Option from "@components/Option";
import ButtonPrimary from "@components/ButtonPrimary";
import Navigation from "@components/Navigation";

type Props = {
  questions: Question[];
  onExit: () => void;
};

const QuizScreen: FC<Props> = ({ questions, onExit }) => {
  // const statistics = useRef({});
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

  const handleBack = () => {
    if (currentQuestion.id === 1) {
      onExit();
    } else {
      setCurrentQuestion((prevValue) => questions[prevValue.id - 2]);
      setSelectedOptions([]);
    }
  };

  const handleContinue = () => {
    // statistics.current = {
    //   ...statistics.current,
    //   [`${currentQuestion.id}: ${currentQuestion.text}`]: selectedOptions,
    // }
    setSelectedOptions([]);

    if (currentQuestion.id === questions.length) {
      console.log("Finish");
      // you can send the statistics somewhere if needed;
    } else {
      setCurrentQuestion((prevValue) => questions[prevValue.id]);
    }
  };

  return (
    <div className={styles.QuizScreen}>
      <Navigation
        total={questions.length}
        current={currentQuestion.id}
        onBack={handleBack}
      />

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
