export interface EnrollProfileState {
  nickname: string;
  gender: 'male' | 'female' | '';
  genres: string[];
  favoriteMovieDrama: string;
}

export type EnrollProfileAction =
  | { type: 'SET_NICKNAME'; payload: string }
  | { type: 'SET_GENDER'; payload: '' | 'male' | 'female' }
  | { type: 'SET_GENRES'; payload: string[] }
  | { type: 'SET_FAVORITE_MOVIE_DRAMA'; payload: string }
  | { type: 'RESET' };

export const initialEnrollProfileState: EnrollProfileState = {
  nickname: '',
  gender: '',
  genres: [],
  favoriteMovieDrama: '',
};

export function enrollProfileReducer(state: EnrollProfileState, action: EnrollProfileAction): EnrollProfileState {
  switch (action.type) {
    case 'SET_NICKNAME':
      return { ...state, nickname: action.payload };
    case 'SET_GENDER':
      return { ...state, gender: action.payload };
    case 'SET_GENRES':
      return { ...state, genres: action.payload };
    case 'SET_FAVORITE_MOVIE_DRAMA':
      return { ...state, favoriteMovieDrama: action.payload };
    case 'RESET':
      return initialEnrollProfileState;
    default:
      return state;
  }
}
