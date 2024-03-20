import { Movie } from "@/app/movies/interfaces/movies-reponse";
import { Metadata } from "next";
import Image from 'next/image'
import Link from "next/link";
import { notFound } from "next/navigation";


interface Props {
  params: { rank: string };
}
// en build 
export async function generateStaticParams(){

  // crea un arreglo con largo de 100 donde se mapea el value y al indice se le suma 1 para evitar el value 0
  const static100Movies = Array.from({length:100}).map((v,i)=>{
    `${i + 1}`
  });


  return static100Movies.map(rank =>{
    rank:rank
  })

}


export async function generateMetadata({ params }: Props): Promise<Metadata> {

  try {
    const { title } = await getMovie(params.rank)

    return {
      title: title,
      description: `page of ${title}`,
    }

  } catch (error) {
    return {
      title: "Movie Page",
      description: "Movie information",
    }

  }

}


const getMovie = async (rank: string): Promise<Movie> => {
  try {
     const response = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${rank}`, {
       headers: {
         'X-RapidAPI-Key': '5161d5c18bmshc52952c78da8284p133093jsn9ea80365e627',
         'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
       },
       next:{
        revalidate:60 * 60 * 30 * 6
       }
     });
 
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
 
     const data = await response.json();
     return {
       rank: data.rank,
       title: data.title,
       year: data.year,
       image: data.image,
       genre: data.genre,
       description: data.description,
       thumbnail: data.thumbnail,
       big_image: data.big_image,
       imdb_link: data.imdb_link
     };
  } catch (error) {
     notFound();
  }
 };
 



export default async function MoviePage({ params }: Props) {


  const movie = await getMovie(params.rank);


  return (

    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">

          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={movie.image}
              width={150}
              height={150}
              alt={`image of movie :${movie.title}`}
              className="mb-5"
            />
            <div className="flex flex-wrap text-2xl font-medium">
              {movie.title}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">

          <div className="flex flex-col items-start rounded-2xl bg-white bg-clip-border px-3 py-5  drop-shadow-lg ">
            <div className="flex flex-wrap mb-3 mt-4">
              <p className=" text-md text-black font-medium mr-1 ">{'Genre:'}</p>
              {
                movie.genre.map((genre, index, array) => (
                  <p key={genre} className="mr-1 capitalize">
                    {genre}
                    {index < array.length - 1 ? ', ' : ''}
                  </p>
                ))
              }
            </div>
            <div className="text-base font-medium text-navy-700 flex">
              {`Movie Rank: #${movie.rank}`}
            </div>
            <Link
              href={movie.imdb_link!}
              className=" font-medium text-2xl text-navy-700 mt-3   transition-all ease-in-out delay-150 text-emerald-600 hover:-translate-y-1 hover:scale-110 hover:text-emerald-800 duration-300"
            >
              IMDb
            </Link >
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-2xl text-gray-600">Plot:</p>
            <span className="text-base font-medium text-navy-700 flex">
              {movie.description}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-2xl text-gray-600">Release year</p>
            <div className="flex items-center ">
              <p className="text-sm text-black font-medium">{movie.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
