import { Button, FixedBottom } from '@/shared/ui';

type GenderProps = {
  onPrev: () => void;
  onNext: () => void;
};

export function Gender({ onPrev, onNext }: GenderProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span>성별 *</span>
        <div className="flex gap-2">
          <Button variant="outline">남성</Button>
          <Button variant="outline">여성</Button>
        </div>
        <span className="text-red-500">error message</span>
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
