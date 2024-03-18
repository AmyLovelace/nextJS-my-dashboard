import { Movie } from "@/app/movies/interfaces/movies-reponse";
import Image from 'next/image'
import MovieCard from "./components/MovieCard";
import MovieGrid from "./components/MovieGrid";

const getMovies = async (): Promise<Movie[]> => {
  const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
    headers: {
      'X-RapidAPI-Key': 'ebdcabf4abmsh4836fcef0ccb747p119624jsn93a81e1f6fdc',
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

  throw new Error('this is an error that should not be thrown')




  return movies;
}

// const getMovie = async (id: string): Promise<Movie> => {
//   const response: Movie = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${id}`, {
//     headers: {
//       'X-RapidAPI-Key': 'ebdcabf4abmsh4836fcef0ccb747p119624jsn93a81e1f6fdc',
//       'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       return {
//         rank: data.rank,
//         title: data.title,
//         year: data.year,
//         image: data.image,
//         director: data.director,
//         genre: data.genre,
//         description: data.description
//       };
//     });

//   return response;

// }


export default async function MoviesPage() {
  const movies = await getMovies();

  //const movie = await getMovie('20');

  return (
    <>
    <div className="flex flex-col">
      <span className="text-5xl my-2">Movie ranking list <small>Static</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
      <MovieGrid movie={movies}/>
      </div>
    </div>
    </>
  );
}