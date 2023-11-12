import WelcomeScreen from '@screens/WelcomeScreen';
import QuizScreen from '@screens/QuizScreen';
import './App.scss'
import { useEffect, useState } from 'react';
import { MaritalStatus, Question } from '@helpers/types';

const App = () => {
  const [status, setStatus] = useState<MaritalStatus>(MaritalStatus.Unknown);
  const [questions, setQuestions] = useState<Question[] | null>(null);

  const handleChoose = (value: MaritalStatus) => {
    setStatus(value);
  }

  useEffect(() => {
    if (status !== MaritalStatus.Unknown) {
      const endpoint = status === MaritalStatus.Relation 
        ? 'Relationship'
        : 'Single';

      const fetchData = async () => {
        try {
          const response = await fetch(`landing-quiz/src/api/questions${endpoint}.json`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const { questions: questionsFromServer } = await response.json();

          setQuestions(questionsFromServer);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }
  }, [status]);


  return (
    <>
      {status === MaritalStatus.Unknown || questions === null
        ? <WelcomeScreen onChoose={handleChoose} />
        : <QuizScreen questions={questions} />
      }
    </>
  )
}

export default App
