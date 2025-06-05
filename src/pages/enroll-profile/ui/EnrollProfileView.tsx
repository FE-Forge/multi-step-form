import { Navigate } from 'react-router-dom';

import { ProgressBar, Text } from '@/shared/ui';
import { Step1Nickname } from './Step1Nickname';
import { Step2Gender } from './Step2Gender';
import { Step3FavoriteGenre } from './Step3FavoriteGenre';
import { Step4FavoriteMovieDrama } from './Step4FavoriteMovieDrama';
import { NOT_ALLOWED_STEP, useStepNavigation } from '../model/useStepNavigation';

const MAX_STEP = 4;
const STEP_TITLE: Record<number, string> = {
  1: '이름(닉네임)',
  2: '성별',
  3: '좋아하는 장르',
  4: '인생 영화/드라마',
};

export function EnrollProfileView() {
  const { currentStep } = useStepNavigation();

  if (currentStep == NOT_ALLOWED_STEP) {
    return <Navigate to="/enroll-profile?step=1" replace />;
  }

  return (
    <main className="max-w-[360px] mx-auto mt-10">
      <section className="flex flex-col gap-2">
        <Text as="h1" level="t1">
          프로필 등록
        </Text>
        <Text as="span" level="b1">
          {currentStep}/{MAX_STEP} 단계 : {STEP_TITLE[currentStep]}
        </Text>

        <ProgressBar current={currentStep} max={MAX_STEP} />
      </section>

      <section className="mt-10">
        {/* GYU-TODO: useFunnel 방식으로 대체 가능 */}
        {currentStep === 1 && <Step1Nickname />}
        {currentStep === 2 && <Step2Gender />}
        {currentStep === 3 && <Step3FavoriteGenre />}
        {currentStep === 4 && <Step4FavoriteMovieDrama />}
      </section>
    </main>
  );
}
