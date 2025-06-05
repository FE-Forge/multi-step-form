import { Button, FixedBottom, Text } from '@/shared/ui';
import { cn } from '@/shared/utils';
import { useState, type ButtonHTMLAttributes } from 'react';
import { useEnrollProfile } from '../model/enroll-profile.context';
import { useStepNavigation } from '../model/useStepNavigation';

const GENRE_LIST = ['액션', '코미디', '드라마', '로맨스', 'SF', '공포'];

export function Step3FavoriteGenre() {
  const { state, dispatch } = useEnrollProfile();

  const { goToNextStep, goToPrevStep } = useStepNavigation();

  const [selectedGenres, setSelectedGenres] = useState<string[]>(state.genres);

  const isSelected = selectedGenres.length > 0;
  return (
    <>
      <div className="flex flex-col gap-2">
        <Text as="span" level="t2" required>
          좋아하는 장르를 선택해주세요 (다중 선택 가능)
        </Text>

        <div className="flex gap-2 flex-wrap">
          {GENRE_LIST.map((genre) => (
            <GenreButton
              key={genre}
              onClick={() => {
                if (selectedGenres.includes(genre)) {
                  setSelectedGenres(selectedGenres.filter((g) => g !== genre));
                } else {
                  setSelectedGenres([...selectedGenres, genre]);
                }
              }}
              className={cn(selectedGenres.includes(genre) && 'border-blue-500 text-white bg-blue-500')}
            >
              {genre}
            </GenreButton>
          ))}
        </div>
      </div>

      <FixedBottom className="flex gap-2">
        <Button level="secondary" onClick={goToPrevStep}>
          이전
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: 'SET_GENRES', payload: selectedGenres });
            goToNextStep();
          }}
          disabled={!isSelected}
        >
          다음
        </Button>
      </FixedBottom>
    </>
  );
}

type GenreButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
function GenreButton({ children, ...props }: GenreButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'border border-gray-300 rounded-2xl w-20 h-10 active:border-blue-500 active:text-white active:bg-blue-500',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
