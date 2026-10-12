import type { Movie } from "@/types/movie";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const releaseYear = movie.release_date?.slice(0, 4) || "N/A";
  const rating = movie.vote_average.toFixed(1);

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.year}>Year: {releaseYear}</p>
      <p className={styles.rating}>Rating: {movie.vote_count > 0 ? `${rating} (${movie.vote_count} votes)` : "Not rated"}</p>
    </article>
  );
}
