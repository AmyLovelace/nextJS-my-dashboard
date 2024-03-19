import { Movie } from "@/app/movies/interfaces/movies-reponse"
import Image from 'next/image'
import MovieCard from "./MovieCard"
import { Key } from "react"

interface Props {
    movie: Movie[]
}

const MovieGrid = ({ movie }: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
            movie.map((movie: Movie, index:Key) => (
                <MovieCard key={index} movie={movie} />
            ))
            }
        </div>
    )
}     
export default MovieGrid
