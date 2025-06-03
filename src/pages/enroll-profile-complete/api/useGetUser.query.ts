import { getUser, type User } from '@/entities/user';
import { useQuery, useSuspenseQuery, type UseQueryOptions } from '@tanstack/react-query';

type Options = Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>;

export const useGetUser = (userId: number, options?: Options) => {
  return useSuspenseQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    staleTime: 1000 * 60 * 5, // 5분 동안 fresh
    ...options,
  });
};
