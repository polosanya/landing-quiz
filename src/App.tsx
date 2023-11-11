import WelcomeScreen from '@screens/WelcomeScreen';
import QuizScreen from '@screens/QuizScreen';
import './App.scss'
import { useState } from 'react';
import { MaritalStatus } from '@helpers/types';

const App = () => {
  const [status, setStatus] = useState<MaritalStatus>(MaritalStatus.Unknown);

  const handleChoose = (value: MaritalStatus) => {
    setStatus(value);
  }

  return (
    <>
      {status === MaritalStatus.Unknown
        ? <WelcomeScreen onChoose={handleChoose} />
        : <QuizScreen />
      }

      {}
    </>
  )
}

export default App
