import { Movie } from "@/app/movies/interfaces/movies-reponse";
import MovieGrid from "./components/MovieGrid";

const getMovies = async (): Promise<Movie[]> => {
  const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
    headers: {
      'X-RapidAPI-Key': '5161d5c18bmshc52952c78da8284p133093jsn9ea80365e627',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  })
    .then(response => response.json());

  const movies = response.map((movie: { rank: number; title: string; description?: string; image: string; genre: string[]; year: number;}) => ({
    rank: movie.rank,
    title: movie.title,
    description: movie.description,
    image: movie.image,
    genre: movie.genre,
    year: movie.year,
  }));

  //throw new Error('this is an error that should not be thrown')




  return movies;
}

export default async function MoviesPage() {
  const movies = await getMovies();

  

  return (
  
    <div className="flex flex-col">
      <span className="text-5xl my-2">Movie ranking list <small>Static</small></span>
      <MovieGrid movie={movies}/>
      </div>
    
  );
}