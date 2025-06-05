import { useState } from 'react';
import { Button, FixedBottom, Input, Text } from '@/shared/ui';

import { nicknameSchema } from '../model/enroll-profile.schema';
import { useEnrollProfile } from '../model/enroll-profile.context';
import { useStepNavigation } from '../model/useStepNavigation';

export function Step1Nickname() {
  const { state, dispatch } = useEnrollProfile();

  const { goToNextStep } = useStepNavigation();

  const [nickname, setNickname] = useState(state.nickname);

  const hasValue = nickname.length > 0;
  const isValid = nicknameSchema.safeParse({ nickname }).success;
  const errorMessage = nicknameSchema.safeParse({ nickname }).error?.issues[0].message;
  return (
    <>
      <div className="flex flex-col gap-2">
        <Text as="p" level="t2" required>
          닉네임
        </Text>
        <Input placeholder="닉네임을 입력해주세요" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        {hasValue && errorMessage && <Text level="error">{errorMessage}</Text>}
      </div>

      <FixedBottom className="flex gap-2">
        <Button
          onClick={() => {
            dispatch({ type: 'SET_NICKNAME', payload: nickname });
            goToNextStep();
          }}
          disabled={!isValid}
        >
          다음
        </Button>
      </FixedBottom>
    </>
  );
}
