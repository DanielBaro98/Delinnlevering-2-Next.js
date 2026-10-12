import type { MovieResponse } from "@/types/movie";

export async function getPopularMovies(): Promise<MovieResponse> {
  const url = "https://api.themoviedb.org/3/movie/popular";

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Popular movies could not be recieved: ${res.status}`);
  }
  const data: MovieResponse = await res.json();
  return data;
}
