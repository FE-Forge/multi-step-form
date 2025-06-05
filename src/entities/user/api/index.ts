import { client } from '@/shared/api';

import type { User } from '../model/user.type';

export const onboardingUser = async (payload: Omit<User, 'id'>): Promise<User> => {
  const response = await client.post('/api/users/onboarding', payload);
  return response.data;
};

export const getUser = async (userId: number): Promise<User> => {
  const response = await client.get(`/api/users/${userId}`);
  return response.data;
};
