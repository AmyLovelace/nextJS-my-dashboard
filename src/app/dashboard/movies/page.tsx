import { Movie, MovieResponse } from "@/app/movies/interfaces/movies-reponse";
import Image from 'next/image'
import MovieCard from "./components/MovieCard";

const getMovies = async (): Promise<MovieResponse> => {
  const response:any = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
    headers: {
      'X-RapidAPI-Key': 'ebdcabf4abmsh4836fcef0ccb747p119624jsn93a81e1f6fdc',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  });

  const data = await response.json();
  return data;
}

const getMovie = async (id: string): Promise<Movie> => {
  const response: Movie = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${id}`, {
    headers: {
      'X-RapidAPI-Key': 'ebdcabf4abmsh4836fcef0ccb747p119624jsn93a81e1f6fdc',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => {
      return {
        rank: data.rank,
        title: data.title,
        year: data.year,
        image: data.image,
        director: data.director,
        genre: data.genre,
        description: data.description
      };
    });

  return response;

}


export default async function MoviesPage() {
  const movies = await getMovies();

  //const movie = await getMovie('20');

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Movie ranking list <small>Static</small></span>
      {/*<MovieCard movies={{...movies}}/>*/}
       <div className="flex flex-wrap gap-10 items-center justify-center">
        {movies.map((movie, index) => (
          <div key={movie.rank} className="flex flex-col items-center w-56">
            <Image
              className="flex items-center"
              src={movie.image}
              alt={movie.title}
              width={100}
              height={100}
            />
            <h3>{movie.title}</h3>
            <p>{movie.rank}</p>
            <p>{movie.director}</p>
            <p>{movie.description}</p>
            <p>{movie.genre}</p>

          </div>
        ))}
      </div> 


    </div>
  );
}