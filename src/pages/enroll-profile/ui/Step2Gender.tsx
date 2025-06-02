import { Button, FixedBottom, Text } from '@/shared/ui';
import { cn } from '@/shared/utils';
import { useState } from 'react';
import { useEnrollProfile } from '../model/enroll-profile.context';
import { useNavigate } from 'react-router-dom';

export function Step2Gender() {
  const navigate = useNavigate();

  const { state, dispatch } = useEnrollProfile();
  const [gender, setGender] = useState<'male' | 'female' | ''>(state.gender);

  const hasValue = gender !== '';
  return (
    <>
      <div className="flex flex-col gap-2">
        <Text as="p" level="t2" required>
          성별
        </Text>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setGender('male')}
            className={cn(gender === 'male' && 'border-blue-500 text-blue-500')}
          >
            남성
          </Button>
          <Button
            variant="outline"
            onClick={() => setGender('female')}
            className={cn(gender === 'female' && 'border-blue-500 text-blue-500')}
          >
            여성
          </Button>
        </div>
      </div>

      <FixedBottom className="flex gap-2">
        <Button level="secondary" onClick={() => navigate('/enroll-profile/1')}>
          이전
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: 'SET_GENDER', payload: gender });
            navigate('/enroll-profile/3');
          }}
          disabled={!hasValue}
        >
          다음
        </Button>
      </FixedBottom>
    </>
  );
}
