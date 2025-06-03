import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';

import { Button, FixedBottom, Input, Text } from '@/shared/ui';
import { useCreateOnboarding } from '../api/useCreateOnboarding.mutation';
import { useEnrollProfile } from '../model/enroll-profile.context';
import { favoriteMovieDramaSchema } from '../model/enroll-profile.schema';

export function Step4FavoriteMovieDrama() {
  const navigate = useNavigate();

  const { state, dispatch } = useEnrollProfile();
  const { mutate: createOnboarding, isPending } = useCreateOnboarding();

  const [favoriteMovieDrama, setFavoriteMovieDrama] = useState(state.favoriteMovieDrama);

  const handleSubmit = async () => {
    createOnboarding(
      {
        nickname: state.nickname,
        gender: state.gender === 'male' ? '남성' : '여성',
        genre: state.genres,
        favorite_movie: favoriteMovieDrama,
      },
      {
        onSuccess: (data) => {
          dispatch({ type: 'RESET' });
          navigate(`/enroll-profile-complete/${data.id}`);
        },
        // GYU-TODO: 특정 페이지의 전체 UI 를 대체하는게 아닌, 메시지 노출만 제어하는 경우
        // 해당 경우 에러 바운더리로 처리하는 것보다 그냥 alert 처리하는게 더 좋다고 생각
        onError: (error) => {
          let errorMessage = error.message;
          if (isAxiosError(error)) {
            errorMessage = error.response?.data.detail ?? error.message;
          }

          alert(errorMessage);
        },
      },
    );
  };

  const isValid = favoriteMovieDramaSchema.safeParse({ favoriteMovieDrama });
  return (
    <>
      <div className="flex flex-col gap-2">
        <Text as="span" level="t2" required>
          인생 영화/드라마
        </Text>
        <Input
          placeholder="인생 영화/드라마를 입력해주세요"
          value={favoriteMovieDrama}
          onChange={(e) => setFavoriteMovieDrama(e.target.value)}
        />
      </div>

      <FixedBottom className="flex gap-2">
        <Button level="secondary" onClick={() => navigate('/enroll-profile/3')}>
          이전
        </Button>
        <Button onClick={handleSubmit} disabled={!isValid.success || isPending}>
          완료
        </Button>
      </FixedBottom>
    </>
  );
}
