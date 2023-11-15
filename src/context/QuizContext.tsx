import { MaritalStatus } from '@helpers/types';
import { FC, ReactNode, createContext, useContext, useState } from 'react';

export type QuizContextType = {
  isQuizCompleted: boolean,
  maritalStatus: MaritalStatus,
  completeQuiz: () => void,
  changeStatus: (s: MaritalStatus) => void,
}

type Props = {
  children: ReactNode,
}

const QuizContext = createContext<QuizContextType | null>(null);


const QuizProvider: FC<Props> = ({ children }) => {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState(MaritalStatus.Unknown);

  const completeQuiz = () => {
    setIsQuizCompleted(true);
  };

  const changeStatus = (newStatus: MaritalStatus) => {
    setMaritalStatus(newStatus);
  }

  return (
    <QuizContext.Provider 
      value={{ 
        isQuizCompleted, 
        maritalStatus,
        completeQuiz,
        changeStatus,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useQuizContext = () => useContext(QuizContext) as QuizContextType;
