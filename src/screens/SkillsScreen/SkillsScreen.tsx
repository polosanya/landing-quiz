import { getQuestions } from "@api/questions";
import ButtonPrimary from "@components/ButtonPrimary";
import Footer from "@components/Footer";
import Loader from "@components/Loader/Loader";
import Navigation from "@components/Navigation";
import Option from "@components/Option";
import {
  IQuestion,
  IQuestionOption,
  MaritalStatus,
  QuestionsEndpoint,
  RoutesType
} from "@helpers/types";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "src/context/QuizContext";
import styles from "./SkillsScreen.module.scss";

const SkillsScreen = () => {
  const navigate = useNavigate();
  const { maritalStatus, changeStatus, completeQuiz, updateAnswersData } =
    useQuizContext();

  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const currentQuestion = useMemo(
    () => questions.find((q) => q.id === currentQuestionId),
    [currentQuestionId, questions]
  );

  useEffect(() => {
    if (maritalStatus !== MaritalStatus.Unknown) {
      const endpoint =
        maritalStatus === MaritalStatus.Relation
          ? QuestionsEndpoint.Relation
          : QuestionsEndpoint.Single;

      const getQuestionsFromServer = async () => {
        try {
          setIsLoading(true);
          const { questions } = await getQuestions(endpoint);

          setQuestions(questions);
          setCurrentQuestionId(questions[0].id);
        } catch {
          throw new Error("Can't load questions");
        }

        setIsLoading(false);
      };

      getQuestionsFromServer();
    }
  }, [maritalStatus]);

  const handleSelect = (option: IQuestionOption, isSelected: boolean) => {
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
      const newData = { [`${currentQuestion.slug}`]: selectedOptions };
      updateAnswersData(newData);
    }
    setSelectedOptions([]);

    if (currentQuestionId === questions.length) {
      completeQuiz();
      navigate(RoutesType.Email);
    } else {
      setCurrentQuestionId((prevValue) => prevValue + 1);
    }
  };

  const isPageLoaded = questions.length > 0 && currentQuestion && !isLoading;

  return (
    <>
      {isLoading && <Loader />}

      {isPageLoaded && (
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
