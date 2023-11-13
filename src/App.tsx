import WelcomeScreen from "@screens/WelcomeScreen";
import QuizScreen from "@screens/QuizScreen";
import "./App.scss";
import { useEffect, useState } from "react";
import { MaritalStatus, Question } from "@helpers/types";
import LoadingScreen from "@screens/LoadingScreen";

const App = () => {
  const [status, setStatus] = useState<MaritalStatus>(MaritalStatus.Unknown);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [isDataCollected, setIsDataCollected] = useState(false);

  const handleChoose = (value: MaritalStatus) => {
    setStatus(value);
  };

  const handleExit = () => {
    setStatus(MaritalStatus.Unknown);
    setQuestions(null);
  };

  const handleSubmit = () => {
    setIsDataCollected(true);
  };

  useEffect(() => {
    if (status !== MaritalStatus.Unknown) {
      const endpoint =
        status === MaritalStatus.Relation ? "Relationship" : "Single";

      const fetchData = async () => {
        try {
          const response = await fetch(`./data/questions${endpoint}.json`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const { questions: questionsFromServer } = await response.json();

          setQuestions(questionsFromServer);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [status]);

  return (
    <>
      {isDataCollected ? (
        <LoadingScreen />
      ) : (
        <>
          {status === MaritalStatus.Unknown || questions === null ? (
            <WelcomeScreen onChoose={handleChoose} />
          ) : (
            <QuizScreen
              questions={questions}
              onExit={handleExit}
              onSubmit={handleSubmit}
            />
          )}
        </>
      )}
    </>
  );
};

export default App;
