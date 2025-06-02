import { z } from 'zod';

export const nicknameSchema = z.object({
  nickname: z
    .string() //
    .min(2, '닉네임은 2-10자 이내로 입력해주세요')
    .max(10, '닉네임은 2-10자 이내로 입력해주세요'),
});

export const genderSchema = z.object({
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: '성별을 선택해주세요.' }),
  }),
});

export const genresSchema = z.object({
  genres: z.array(z.string()).min(1, '장르를 1개 이상 선택해주세요.'),
});

export const favoriteWorkSchema = z.object({
  favoriteWork: z.string().min(1, '작품명을 입력해주세요.'),
});
