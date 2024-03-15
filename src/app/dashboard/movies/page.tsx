import { MovieResponse} from "@/app/movies/interfaces/movies-reponse";
import Image from 'next/image'

const getMovies = async ():Promise<MovieResponse> => {
  const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
    headers: {
      'X-RapidAPI-Key': 'ebdcabf4abmsh4836fcef0ccb747p119624jsn93a81e1f6fdc',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  });

  const data = await response.json();
  return data;
}

const getMovie = async (id:string):Promise<MovieResponse> => {
  const response:MovieResponse = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${id}`, {
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
       description:data.description
     };
  });
 
  return response;


  
}


export default async function MoviesPage() {
  //const movies = await getMovies();

  const movie = await getMovie('20');

  return (

    <div style={{ width: '500px' }} className="flex flex-col">
      <span>
        <Image
        src={movie.image} 
        alt="Imagen de Movies"
        width={100}
        height={200}
        ></Image>
      </span>
      <span>
        rank:{movie.rank}
      </span>
      <span>
        {movie.title}
      </span>
      <span>
        {movie.description}
      </span>
      <span>
        {movie.director}
      </span>
      <span>
        {movie.genre}
      </span>
     
      
      
    </div>

  

  
  );
}