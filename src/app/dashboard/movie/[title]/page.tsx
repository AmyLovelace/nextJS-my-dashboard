

interface Props{
  params:{title:string}
}
export default function MoviePage({params}:Props) {
  
  const parseTitle = params.title.replaceAll('%20', ' ')

  
  return (
    <div>
      <h1>Hello Singular Movie Page :{parseTitle}</h1>
    </div>
  );
}