import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './components/UI/Card';
function Movie() {
  const moviesData = useLoaderData(); //Through useLoaderData hook we get the API data.
  console.log(moviesData);
  return (
    <>
    {/* <h1> This is Movie Page</h1> */}
    <ul className="container grid grid-four--cols">
    {moviesData.Search.map((curMovie)=>{
      return <Card key={curMovie.imdbID} curMovie={curMovie}/>
    })}
    </ul>
    
    
    </>
  )
}
 

export default Movie