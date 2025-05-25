import { type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return <input type="text" className="border border-gray-300 rounded-md p-2" {...props} />;
}
