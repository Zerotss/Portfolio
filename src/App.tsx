import MainCircle from "./pages/components/MainCircle";
import WelcomeTitle from "./pages/components/WelcomeTitle";
import LandingPage from "./pages/landingPage/LandingPage";
import MainPage from "./pages/mainPage/MainPage";
import { useAppStore } from "./stores/AppStore";


export default function App() {
  const { currentState } = useAppStore();

  return (
    <div className="bg-gray-100">
      {(currentState === "Landing" || currentState === "TransitionDOWN") && <LandingPage />}
      {(currentState === "TransitionDOWN") && <WelcomeTitle />}
      {(currentState === "Main" || currentState === "TransitionDOWN") && <MainCircle />}
      {currentState === "Main" && <MainPage />}
    </div>

  );
};
