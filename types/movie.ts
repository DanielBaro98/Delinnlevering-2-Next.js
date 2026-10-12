export type BaseMovie = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
};

export type Movie = BaseMovie & {
  overview: string;
  genre_ids: number[];
};

export type MovieDetails = BaseMovie & {
  overview: string;
  runtime: number | null;
  genres: { id: number; name: string }[];
  budget: number;
  revenue: number;
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
