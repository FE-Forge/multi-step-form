export type User = {
  id: number;
  nickname: string;
  gender: '남성' | '여성';
  genre: string[];
  favorite_movie?: string;
};
