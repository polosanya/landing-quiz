import EmailScreen from "@screens/EmailScreen";
import LoadingScreen from "@screens/LoadingScreen";
import SkillsScreen from "@screens/SkillsScreen";
import WelcomeScreen from "@screens/WelcomeScreen";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
// import { useQuizContext } from "./context/QuizContext";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="skills" element={<SkillsScreen />} />
      <Route path="email" element={<EmailScreen />} />
      <Route path="loading" element={<LoadingScreen />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default App;
