import { Movie } from "@/app/movies/interfaces/movies-reponse";
import { Metadata } from "next";


interface Props{
  params:{rank:string};
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  
  const {title, description} = await getMovie(params.rank)
  
  return{
    title: title,
    description: `page of ${title}`,
  }
}


const getMovie = async (rank:string): Promise<Movie> => {
  const response: Movie = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${rank}`, {
    headers: {
      'X-RapidAPI-Key': 'ebdcabf4abmsh4836fcef0ccb747p119624jsn93a81e1f6fdc',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    },cache:'force-cache'//TODO
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

    //console.log(response)
  return response;
      


  

}



export default async function MoviePage({params}:Props) {
  
 
  const movie = await getMovie(params.rank);
  
   


  return (
   
    <div>
      
      <h1>Hello Singular Movie Page :{movie.title}</h1>
    </div>
  );
}
