import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'

function Errorpage() {
    const error = useRouteError(); //This hook returns an object.
    console.log(error);
    const navigate= useNavigate();  //useNavigate hook returns a function and that function we stored in navigate variable.
    console.log(navigate);
    const handleError=()=>{
        // navigate("/");
        navigate(-1);
    }
    if(error.status === 404){
  return (
    <>
    {/* <h1>Error 404 Page not found</h1>
    <h1>{error.error.message}</h1> */}
    <section className='error-section'>
        <div id='error-text'>
            <figure>
                <img src='./Errorpagephoto.jpg'
                alt='404 page' height={700}/>
            </figure>
            <div className='text-center'>
                <p className='p-a'>
                    The page you were looking for could not be found
                </p>
                <p className='p-b'>...Back to previous page</p>
            </div>
        </div>
    </section>
    <button style={{backgroundColor:"red",color:"black"}}>
        <NavLink to='/'>Go To Home Page</NavLink>
    </button>
    <button onClick={handleError}>Go back</button>
    </>
  )
}
}

export default Errorpage