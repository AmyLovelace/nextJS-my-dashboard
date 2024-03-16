import { Movie, MovieResponse } from "@/app/movies/interfaces/movies-reponse"
import Image from 'next/image'
import MovieCard from "./MovieCard"

interface Props {
    movies:MovieResponse
}

const MovieGrid = ({movies}:Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">

        {movies.map(movie => (
            <MovieCard key={movie.id} movies={{...movie}}/>
        //   <div key={movie.rank} className="flex flex-col items-center w-56">
        //    
        //     <h3>{movie.title}</h3>
        //     <p>{movie.rank}</p>
        //     <p>{movie.director}</p>
        //     <p>{movie.description}</p>
        //     <p>{movie.genre}</p>

        //   </div>
        ))}
      </div>
  )
}

export default MovieGrid
