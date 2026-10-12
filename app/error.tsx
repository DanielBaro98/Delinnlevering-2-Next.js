"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Something went wrong!</h1>
      <p>We could not load the movies right now. Please try again.</p>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
