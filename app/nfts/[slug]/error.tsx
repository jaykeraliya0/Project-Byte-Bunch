"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen text-white flex flex-col space-y-10 justify-center items-center">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-sm">{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
