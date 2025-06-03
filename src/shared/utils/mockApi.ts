export function mockApiSuccess<T>(data: T, delay = 1000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

export function mockApiFailure(error: Error | string, delay = 1000): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(typeof error === 'string' ? new Error(error) : error), delay);
  });
}
