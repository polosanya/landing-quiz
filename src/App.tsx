import EmailScreen from "@screens/EmailScreen";
import LoadingScreen from "@screens/LoadingScreen";
import SkillsScreen from "@screens/SkillsScreen";
import WelcomeScreen from "@screens/WelcomeScreen";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { MaritalStatus, RoutesType } from "@helpers/types";
import RouteGuard from "@components/RouteGuard";
import { useQuizContext } from "./context/QuizContext";

const App = () => {
  const { maritalStatus, isQuizCompleted } = useQuizContext();

  return (
    <Routes>
      <Route path={RoutesType.Welcome} element={<WelcomeScreen />} />
      <Route
        path={RoutesType.Skills}
        element={
          <RouteGuard condition={maritalStatus !== MaritalStatus.Unknown}>
            <SkillsScreen />
          </RouteGuard>
        }
      />

      <Route
        path={RoutesType.Email}
        element={
          <RouteGuard condition={isQuizCompleted}>
            <EmailScreen />
          </RouteGuard>
        }
      />

      <Route
        path={RoutesType.Loading}
        element={
          <RouteGuard condition={isQuizCompleted}>
            <LoadingScreen />
          </RouteGuard>
        }
      />
      <Route path={RoutesType.Default} element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default App;
