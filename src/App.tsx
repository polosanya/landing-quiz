import { Routes, Route } from "react-router-dom";
import LoadingScreen from "@screens/LoadingScreen";
import WelcomeScreen from "@screens/WelcomeScreen";
import "./App.scss";
import SkillsScreen from "@screens/SkillsScreen";
import EmailScreen from "@screens/EmailScreen";

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
