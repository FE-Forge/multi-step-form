import { useSearchParams, useNavigate } from 'react-router-dom';

export const NOT_ALLOWED_STEP = -1;
export function useStepNavigation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentStep = Number(searchParams.get('step') ?? NOT_ALLOWED_STEP);

  const goToStep = (step: number) => {
    navigate(`/enroll-profile?step=${step}`);
  };

  const goToNextStep = () => {
    goToStep(currentStep + 1);
  };

  const goToPrevStep = () => {
    goToStep(currentStep - 1);
  };

  return {
    currentStep,
    goToStep,
    goToNextStep,
    goToPrevStep,
  };
}
