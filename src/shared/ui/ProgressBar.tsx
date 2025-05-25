export function ProgressBar({ current, max }: { current: number; max: number }) {
  const progress = current / max;
  return (
    <div className="w-full h-[10px] bg-gray-100 rounded-md overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-transform duration-300 origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
