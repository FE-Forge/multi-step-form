import { useState } from 'react';

import { ProgressBar, Text } from '@/shared/ui';
import { NickName } from './NickName';
import { Gender } from './Gender';
import { FavoriteGenre } from './FavoriteGenre';
import { FavoriteMovieDrama } from './FavoriteMovieDrama';

const MAX_STEP = 4;
const STEP_TITLE: Record<number, string> = {
  1: '이름(닉네임)',
  2: '성별',
  3: '좋아하는 장르',
  4: '인생 영화/드라마',
};

export function EnrollProfilePage() {
  const [step, setStep] = useState(3);

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
        {step === 1 && <NickName onNext={() => setStep(2)} />}
        {step === 2 && <Gender onPrev={() => setStep(1)} onNext={() => setStep(3)} />}
        {step === 3 && <FavoriteGenre onPrev={() => setStep(2)} onNext={() => setStep(4)} />}
        {step === 4 && <FavoriteMovieDrama onPrev={() => setStep(3)} onSubmit={() => {}} />}
      </section>
    </main>
  );
}
