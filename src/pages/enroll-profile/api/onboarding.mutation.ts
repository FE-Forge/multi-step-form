import { onboardingUser } from '@/entities/user';
import { mutationOptions } from '@suspensive/react-query';

export const createOnboardingOptions = () => {
  return mutationOptions({
    mutationFn: onboardingUser,
  });
};
