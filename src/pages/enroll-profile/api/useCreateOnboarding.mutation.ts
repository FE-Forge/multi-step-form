import { onboardingUser, type User } from '@/entities/user';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

type Options = Omit<UseMutationOptions<User, Error, Omit<User, 'id'>>, 'mutationKey' | 'mutationFn'>;

export const useCreateOnboarding = (options?: Options) => {
  return useMutation({
    mutationFn: onboardingUser,
    ...options,
  });
};
