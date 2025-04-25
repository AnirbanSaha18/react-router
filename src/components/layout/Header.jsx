// import React from 'react'
// import {Link, NavLink} from 'react-router-dom'
// import './Header.css'
// function Header() {
//   return (
//     <>
//     {/* <h1>This is Header page</h1> */}
//     <nav>
        
//         <ul>
//             <li>
//             <NavLink to='/'>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to='/about'>About</NavLink>
//             </li>
//             <li>
//                 <NavLink to='/movie'>Movie</NavLink>
//             </li>

//             <li>
//                 <NavLink to='/contact'>Contact</NavLink>
//             </li>
//         </ul>
//     </nav>
//     </>
//   )
// }

// export default Header




import { NavLink } from "react-router-dom";

 const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
    };
  };

  return (
    <>
      <header className="section-navbar">
        {/* <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section> */}

        <div className="container">
          <div className="navbar-brand">
            {/* <NavLink to="index"> */}
              <p style={{color:"#DA291C"}}>MovieFlix</p>
            {/* </NavLink> */}
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="movie"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;