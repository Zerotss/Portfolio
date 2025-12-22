import { useEffect, useRef } from 'react';
import { useAppStore } from '../../stores/AppStore';
import AnimatedBackgroundCircles from './components/AnimatedBackgroundCircles';
import LandingPageAnimationWrapper from './components/LandingPageAnimationWrapper';

type LandingPageProps = {
  circleSpinnningTime: number;
};
const LandingPage = ({ circleSpinnningTime }: LandingPageProps) => {
  const { setState } = useAppStore();

  const triggerCircles = useRef<() => void>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      triggerCircles.current?.();
    }, circleSpinnningTime);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <LandingPageAnimationWrapper>
      <div className='bg-gray-100'>
      <AnimatedBackgroundCircles triggerRef={triggerCircles} onExitComplete={() => setState("TransitionDOWN")} />
      </div>
    </LandingPageAnimationWrapper>
  );
};

export default LandingPage;
