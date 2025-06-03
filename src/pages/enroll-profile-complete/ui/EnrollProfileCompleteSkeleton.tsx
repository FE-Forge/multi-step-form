import { Skeleton } from '@/shared/ui/Skeleton';

export function EnrollProfileCompleteSkeleton() {
  return (
    <main className="max-w-[360px] mx-auto mt-10">
      <section className="flex flex-col gap-2 text-center">
        <Skeleton height="30px" width="100%" />
        <Skeleton height="40px" width="100%" />
      </section>

      <section className="mt-10 rounded-lg">
        <ul className="flex flex-col gap-2">
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="100%" />
        </ul>
      </section>
    </main>
  );
}
