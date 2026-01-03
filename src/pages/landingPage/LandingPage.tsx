import { useAppStore } from '../../stores/AppStore';
import AnimatedBackgroundCircles from './components/AnimatedBackgroundCircles';
import LandingPageAnimationWrapper from './components/LandingPageAnimationWrapper';


const LandingPage = () => {
  const { setState } = useAppStore();


  return (
    <LandingPageAnimationWrapper>
      <div className='bg-gray-100'>
      <AnimatedBackgroundCircles onExitComplete={() => setState("TransitionDOWN")} />
      </div>
    </LandingPageAnimationWrapper>
  );
};

export default LandingPage;
