import css from "./MovieGrid.module.css";
import { type Movie } from "../../types/movie";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}
export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  const defaultImageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item} onClick={() => onSelect(movie)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`${defaultImageUrl}${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
