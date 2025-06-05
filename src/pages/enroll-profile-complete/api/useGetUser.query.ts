import { getUser } from '@/entities/user';
import { queryOptions } from '@tanstack/react-query';

export const userQueryOptions = (userId: number) =>
  queryOptions({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
  });
