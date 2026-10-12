import { getPopularMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default async function PopularMoviesPage() {
  const data = await getPopularMovies();

  return (
    <main>
      <h1> Popular Movies!</h1>
      <p>Total results found: {data.total_results}</p>

      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
