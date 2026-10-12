import type { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const rating = movie.vote_average.toFixed(1);

  return (
    <article>
      <h2>{movie.title}</h2>
      <p>Year: {movie.release_date?.slice(0, 4)}</p>
      <p>Rating: {movie.vote_average > 0 ? `${rating} (${movie.vote_count} votes)` : "Not rated"}</p>
    </article>
  );
}
