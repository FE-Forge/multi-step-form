import { useNavigate, useParams } from 'react-router-dom';

import { Button, FixedBottom, Text } from '@/shared/ui';
import { useGetUser } from '../api/useGetUser.query';

export function EnrollProfileCompleteView() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { data: user } = useGetUser(Number(userId));

  return (
    <main className="max-w-[360px] mx-auto mt-10">
      <section className="flex flex-col gap-2 text-center">
        <Text as="h1" level="t1">
          온보딩 완료!
        </Text>
        <Text as="span" level="b1">
          온보딩이 성공적으로 완료되었습니다. <br />
          입력하신 정보를 확인해보세요.
        </Text>
      </section>

      <section className="mt-10 bg-gray-100 rounded-lg p-4">
        <Text as="h2" level="t1" className="text-center">
          입력 정보
        </Text>

        <ul className="flex flex-col gap-2">
          <SummaryItem label="사용자 ID:" value={`#${user?.id}`} />
          <SummaryItem label="닉네임:" value={user?.nickname} />
          <SummaryItem label="성별:" value={user?.gender} />
          <SummaryItem label="선호 장르:" value={user?.genre.join(', ')} />
          <SummaryItem label="인생 영화/드라마:" value={user?.favorite_movie} />
        </ul>
      </section>

      <FixedBottom className="flex gap-2">
        <Button
          onClick={() => {
            navigate('/enroll-profile');
          }}
        >
          서비스 시작하기
        </Button>
      </FixedBottom>
    </main>
  );
}

function SummaryItem({ label, value }: { label: string; value?: string }) {
  return (
    <li className="flex justify-between">
      <Text as="span" level="b1">
        {label}
      </Text>
      <Text as="span" level="b1">
        {value}
      </Text>
    </li>
  );
}
