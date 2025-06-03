import { client } from '@/shared/api';
import { mockApiSuccess, mockApiFailure } from '@/shared/utils/mockApi';

import type { User } from '../model/user.type';

const MOCK_USER = {
  nickname: '123111',
  gender: '남성',
  genre: ['액션', '코미디'],
  favorite_movie: '123',
  id: 6,
} satisfies User;

export const onboardingUser = async (payload: Omit<User, 'id'>): Promise<User> => {
  const response = await client.post('/api/users/onboarding', payload);
  return response.data;

  // 개발용 - 성공
  // return mockApiSuccess(MOCK_USER);

  // 개발용 - 에러 발생
  // return mockApiFailure(new Error('이미 사용 중인 닉네임입니다.'));
};

export const getUser = async (userId: number): Promise<User> => {
  const response = await client.get(`/api/users/${userId}`);
  return response.data;

  // 개발용 - 성공
  // return mockApiSuccess(MOCK_USER);

  // 개발용 - 에러
  // return mockApiFailure(new Error('유저를 찾을 수 없습니다.'));
};
