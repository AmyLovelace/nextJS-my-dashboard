import { Movie, MovieResponse } from "@/app/movies/interfaces/movies-reponse";
import Image from 'next/image'
import MovieGrid from "./components/MovieGrid";

const getMovies = async (): Promise<MovieResponse> => {
  const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
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
  
    <MovieGrid movies={movies}/>
    </div>
  );
}