import React from 'react'
import './card.css'
import { NavLink } from 'react-router-dom';
function Card({curMovie}) {
    const { Poster, imdbID,Year } = curMovie;
  return (
    <>
    {/* <div>Card</div> */}
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
          <h3>Year: {Year}</h3>
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
          <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>
           
          </div>
        </div>
      </div>
    </li>
    
    </>
  )
}

export default Card