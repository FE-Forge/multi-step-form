import { createContext, useContext, useEffect, useReducer } from 'react';
import type { ReactNode, Dispatch } from 'react';
import { enrollProfileReducer, initialEnrollProfileState } from './enroll-profile.reducer';
import type { EnrollProfileState, EnrollProfileAction } from './enroll-profile.reducer';
import { getSessionStorage, removeSessionStorage, setSessionStorage } from '@/shared/utils/sessionStorage';

interface EnrollProfileContextType {
  state: EnrollProfileState;
  dispatch: Dispatch<EnrollProfileAction>;
}

const EnrollProfileContext = createContext<EnrollProfileContextType | null>(null);

const SESSION_STORAGE_KEY = 'enroll-profile-state';

export function EnrollProfileProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(enrollProfileReducer, undefined, () =>
    getSessionStorage(SESSION_STORAGE_KEY, initialEnrollProfileState),
  );

  // GYU-TODO: 해당 부분에서 스토리지를 업데이트하는게 맞는지 모르겠음..
  // 차라리 reducer 에서 스토리지를 업데이트하는게 응집도를 더 높이지 않을까?
  // No, reducer 에서 스토리지를 업데이트 하면 순수함수가 아님 (사이드 이펙트 발생)
  useEffect(
    function updateSessionStorage() {
      const isReset = state === initialEnrollProfileState;
      if (isReset) {
        removeSessionStorage(SESSION_STORAGE_KEY);
      } else {
        setSessionStorage(SESSION_STORAGE_KEY, state);
      }
    },
    [state],
  );

  return <EnrollProfileContext.Provider value={{ state, dispatch }}>{children}</EnrollProfileContext.Provider>;
}

export function useEnrollProfile() {
  const context = useContext(EnrollProfileContext);
  if (!context) {
    throw new Error('useEnrollProfile must be used within an EnrollProfileProvider');
  }
  return context;
}
