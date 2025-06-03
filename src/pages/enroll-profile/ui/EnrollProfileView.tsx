import { useParams } from 'react-router-dom';

import { ProgressBar, Text } from '@/shared/ui';
import { Step1Nickname } from './Step1Nickname';
import { Step2Gender } from './Step2Gender';
import { Step3FavoriteGenre } from './Step3FavoriteGenre';
import { Step4FavoriteMovieDrama } from './Step4FavoriteMovieDrama';

const MAX_STEP = 4;
const STEP_TITLE: Record<number, string> = {
  1: '이름(닉네임)',
  2: '성별',
  3: '좋아하는 장르',
  4: '인생 영화/드라마',
};

export function EnrollProfileView() {
  const { step: stepParam = '1' } = useParams();
  const step = Number(stepParam);

  return (
    <main className="max-w-[360px] mx-auto mt-10">
      <section className="flex flex-col gap-2">
        <Text as="h1" level="t1">
          프로필 등록
        </Text>
        <Text as="span" level="b1">
          {step}/{MAX_STEP} 단계 : {STEP_TITLE[step]}
        </Text>

        <ProgressBar current={step} max={MAX_STEP} />
      </section>

      <section className="mt-10">
        {step === 1 && <Step1Nickname />}
        {step === 2 && <Step2Gender />}
        {step === 3 && <Step3FavoriteGenre />}
        {step === 4 && <Step4FavoriteMovieDrama />}
      </section>
    </main>
  );
}
