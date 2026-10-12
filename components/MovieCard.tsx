import type { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <p>Year: {movie.release_date?.slice(0, 4)}</p>
    </article>
  );
}
