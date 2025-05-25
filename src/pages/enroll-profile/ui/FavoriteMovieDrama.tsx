import { Button, FixedBottom, Input } from '@/shared/ui';

type FavoriteMovieDramaProps = {
  onPrev: () => void;
  onSubmit: () => void;
};

export function FavoriteMovieDrama({ onPrev, onSubmit }: FavoriteMovieDramaProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span>인생 영화/드라마</span>
        <Input placeholder="인생 영화/드라마를 입력해주세요" />
      </div>

      <FixedBottom className="flex gap-2">
        <Button level="secondary" onClick={onPrev}>
          이전
        </Button>
        <Button onClick={onSubmit}>완료</Button>
      </FixedBottom>
    </>
  );
}
