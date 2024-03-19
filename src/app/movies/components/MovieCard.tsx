import { Movie } from "@/app/movies/interfaces/movies-reponse"
import Link from "next/link"
import Image from 'next/image'
import { IoHeartOutline } from "react-icons/io5"

interface Props {
    movie: Movie
}


const MovieCard = ({ movie }: Props) => {

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <Image
                        className=" text-white mx-auto"
                        src={movie.image}
                        alt={movie.title}
                        width={100}
                        height={100}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{movie.title}</p>
                    <p className="text-sm text-gray-100">{movie.year}</p>
                    <div className="mt-5">
                       
                        <Link
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                            href={`movie/${movie.title}`}
                        >
                            Know more
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href={`main`} className="px-4 py-2 hover:bg-gray-100 flex items-center" >
                        <div className="text-red-600">
                            <IoHeartOutline />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                Not a favorite movie</p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
