import { createContext, useContext, useEffect, useReducer } from 'react';
import type { ReactNode, Dispatch } from 'react';
import { enrollProfileReducer, initialEnrollProfileState } from './enroll-profile.reducer';
import type { EnrollProfileState, EnrollProfileAction } from './enroll-profile.reducer';
import { getSessionStorage, setSessionStorage } from '@/shared/utils/sessionStorage';

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

  useEffect(() => {
    setSessionStorage(SESSION_STORAGE_KEY, state);
  }, [state]);

  return <EnrollProfileContext.Provider value={{ state, dispatch }}>{children}</EnrollProfileContext.Provider>;
}

export function useEnrollProfile() {
  const context = useContext(EnrollProfileContext);
  if (!context) {
    throw new Error('useEnrollProfile must be used within an EnrollProfileProvider');
  }
  return context;
}
