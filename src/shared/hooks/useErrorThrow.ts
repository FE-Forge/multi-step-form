import { useCallback, useEffect, useState } from 'react';

interface UseErrorThrowerOptions {
  errorMessage?: string;
}

export function useErrorThrow({ errorMessage = '테스트를 위한 에러입니다.' }: UseErrorThrowerOptions = {}) {
  const [shouldError, setShouldError] = useState(false);

  const throwError = useCallback(() => {
    setShouldError(true);
  }, []);

  useEffect(
    function throwErrorEffect() {
      if (shouldError) {
        throw new Error(errorMessage);
      }
    },
    [shouldError, errorMessage],
  );

  return {
    throwError,
    errorMessage,
  };
}
