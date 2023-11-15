import ButtonPrimary from "@components/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import Option from "@components/Option";
import { Answer, MaritalStatus, Question, RoutesType } from "@helpers/types";
import { useEffect, useMemo, useState } from "react";
import styles from "./SkillsScreen.module.scss";
import { useQuizContext } from "src/context/QuizContext";

const SkillsScreen = () => {
  // const statistics = useRef({});
  const navigate = useNavigate();
  const { maritalStatus, changeStatus, completeQuiz, updateAnswersData } = useQuizContext();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const currentQuestion = useMemo(
    () => questions.find((q) => q.id === currentQuestionId),
    [currentQuestionId, questions]
  );

  useEffect(() => {
    if (maritalStatus !== MaritalStatus.Unknown) {
      const endpoint =
      maritalStatus === MaritalStatus.Relation ? "Relationship" : "Single";

      const fetchData = async () => {
        try {
          const response = await fetch(`./data/questions${endpoint}.json`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const { questions: questionsFromServer } = await response.json();

          setQuestions(questionsFromServer);
          setCurrentQuestionId(questionsFromServer[0].id);
        } catch (error) {
          console.error("Error fetching data:", error);
          navigate(RoutesType.Welcome);
        }
      };

      fetchData();
    }
  }, [navigate, maritalStatus]);  

  const handleSelect = (option: Answer, isSelected: boolean) => {
    return () => {
      setSelectedOptions((prevValues) =>
        isSelected
          ? prevValues.filter((value) => value !== option.slug)
          : [...prevValues, option.slug]
      );
    };
  };

  const handleBack = () => {
    if (currentQuestionId === 1) {
      changeStatus(MaritalStatus.Unknown);
      navigate(RoutesType.Welcome);
    } else {
      setCurrentQuestionId((prevValue) => prevValue - 1);
      setSelectedOptions([]);
    }
  };

  const handleContinue = () => {
    if (currentQuestion) {
      const newData = { [`${currentQuestion.slug}`]: selectedOptions}
      updateAnswersData(newData);
    }
    setSelectedOptions([]);

    if (currentQuestionId === questions.length) {
      completeQuiz();
      navigate(RoutesType.Email);
      // you can send the statistics somewhere if needed;
    } else {
      setCurrentQuestionId((prevValue) => prevValue + 1);
    }
  };

  return (
    <>
      {questions.length > 0 && currentQuestion && (
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
              const isSelected = selectedOptions?.includes(option.slug);

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

export default SkillsScreen;
