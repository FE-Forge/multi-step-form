import { Button, FixedBottom, Input } from '@/shared/ui';

type NickNameProps = {
  onNext?: () => void;
};

export function NickName({ onNext }: NickNameProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span>닉네임 *</span>
        <Input placeholder="닉네임을 입력해주세요" />
        {/* <span className="text-red-500">error message</span> */}
      </div>

      <FixedBottom className="flex gap-2">
        <Button onClick={onNext}>다음</Button>
      </FixedBottom>
    </>
  );
}
