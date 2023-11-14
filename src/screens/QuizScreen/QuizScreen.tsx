import { Answer, Question } from "@helpers/types";
import styles from "./QuizScreen.module.scss";
import { FC, useState } from "react";
import Option from "@components/Option";
import ButtonPrimary from "@components/ButtonPrimary";
import Navigation from "@components/Navigation";
import EmailScreen from "@screens/EmailScreen";
import Footer from "@components/Footer";

type Props = {
  questions: Question[];
  onExit: () => void;
  onSubmit: () => void;
};

const QuizScreen: FC<Props> = ({ questions, onExit, onSubmit }) => {
  // const statistics = useRef({});
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedOptions, setSelectedOptions] = useState<Answer[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

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
      setIsCompleted(true);
      // you can send the statistics somewhere if needed;
    } else {
      setCurrentQuestion((prevValue) => questions[prevValue.id]);
    }
  };

  return (
    <>
      {isCompleted ? (
        <EmailScreen onSubmit={onSubmit} />
      ) : (
        <div className={styles.screen}>
          <Navigation
            total={questions.length}
            current={currentQuestion.id}
            onBack={handleBack}
          />

          <div className={styles.title}>
            <h1>
              {currentQuestion.text} {currentQuestion.id}
            </h1>

            <h3 className={styles.subtitle}>Select all that apply</h3>
          </div>

          <div className={styles.options}>
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
          </div>

          <Footer>
            <ButtonPrimary
              text="Continue"
              disabled={selectedOptions.length === 0}
              onClick={handleContinue}
            />
          </Footer>
        </div>
      )}
    </>
  );
};

export default QuizScreen;
