import { IAnswersData, MaritalStatus } from '@helpers/types';
import { FC, ReactNode, createContext, useContext, useState } from 'react';

export type QuizContextType = {
  isQuizCompleted: boolean,
  maritalStatus: MaritalStatus,
  completeQuiz: () => void,
  changeStatus: (s: MaritalStatus) => void,
  email: string,
  updateEmail: (v: string) => void,
  answersData: IAnswersData,
  updateAnswersData: (a: IAnswersData) => void,
}

type Props = {
  children: ReactNode,
}

const QuizContext = createContext<QuizContextType | null>(null);


const QuizProvider: FC<Props> = ({ children }) => {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState(MaritalStatus.Unknown);
  const [email, setEmail] = useState('');
  const [answersData, setAnswersData] = useState<IAnswersData>({});

  const completeQuiz = () => {
    setIsQuizCompleted(true);
  };

  const changeStatus = (newStatus: MaritalStatus) => {
    setMaritalStatus(newStatus);
  }

  const updateEmail = (newValue: string) => {
    setEmail(newValue);
  }

  const updateAnswersData = (newData: IAnswersData) => {
    setAnswersData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };

  return (
    <QuizContext.Provider 
      value={{ 
        isQuizCompleted, 
        maritalStatus,
        completeQuiz,
        changeStatus,
        email,
        updateEmail,
        answersData,
        updateAnswersData
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useQuizContext = () => useContext(QuizContext) as QuizContextType;
