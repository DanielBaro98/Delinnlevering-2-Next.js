import { getPopularMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import styles from "./page.module.css";

export default async function PopularMoviesPage() {
  const data = await getPopularMovies();
  const movies = data.results.slice(0, 3);
  return (
    <main className={styles.container}>
      <h1 className={styles.title}> Popular Movies!</h1>
      <p className={styles.subtitle}>Total results found: {data.total_results}</p>

      <ul className={styles.grid}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
