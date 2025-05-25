import { Button, FixedBottom } from '@/shared/ui';

type FavoriteGenreProps = {
  onPrev: () => void;
  onNext: () => void;
};

function GenreButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="border border-gray-300 rounded-2xl w-20 h-10 active:border-blue-500 active:text-white active:bg-blue-500">
      {children}
    </button>
  );
}

const GENRE_LIST = ['액션', '코미디', '드라마', '로맨스', 'SF', '공포'];

export function FavoriteGenre({ onPrev, onNext }: FavoriteGenreProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span>좋아하는 장르를 선택해주세요 (다중 선택 가능) *</span>
        <div className="flex gap-2 flex-wrap">
          {GENRE_LIST.map((genre) => (
            <GenreButton key={genre}>{genre}</GenreButton>
          ))}
        </div>
      </div>

      <FixedBottom className="flex gap-2">
        <Button level="secondary" onClick={onPrev}>
          이전
        </Button>
        <Button onClick={onNext}>다음</Button>
      </FixedBottom>
    </>
  );
}
