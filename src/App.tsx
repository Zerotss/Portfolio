import LandingPage from "./pages/landingPage/LandingPage";
import MainPage from "./pages/mainPage/MainPage";
import MainCircle from "./pages/titlePage/MainCircle";
import WelcomeTitle from "./pages/titlePage/WelcomeTitle";
import { useAppStore } from "./stores/AppStore";


// Example Usage
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
