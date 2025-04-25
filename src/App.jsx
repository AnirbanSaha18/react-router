import './App.css'
import { createHashRouter,RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Movie from './Movie';
import Contact, { contactData } from './Contact';
import AppLayout from './components/layout/AppLayout';
import Errorpage from './Errorpage';
import { getMoviesdata } from './api/GetApiData';
import MovieDetails from './components/UI/MovieDetails';
import { getMoviesDetails } from './api/GetMovieDetails';

function App() {
  const router = createHashRouter([ //Through createBrowserRouter here we create a Route.
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Errorpage/>, // Here we add errorElement property for handling the error if user enter invalid URL then it will go to errorpage.
      children:[{//Here we create a children so,in all the pages(home,about,contact etc) Header, footer will show.AppLayout is our parent component and inside a applayout everything will show.
        // path:"/",
        index: true,
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path: "movie",
        element:<Movie/>,
        loader: getMoviesdata,
      },
      {
        path: "movie/:movieID", //Here the value is dynamic value.movieId value is dynamic
        element:<MovieDetails/>,
        loader: getMoviesDetails,
      },

      {
        path:"contact",
        element:<Contact/>,
        action:contactData,
      }
        

        
      ]
    },
    // {
    //   path:"/",
    //   element:<Home/>
    // },
    // {
    //   path:"/about",
    //   element:<About/>
    // },
    // {
    //   path: "/movie",
    //   element:<Movie/>
    // },
    // {
    //   path:"/contact",
    //   element:<Contact/>
    // }

  ],
  // {
  //   basename:"/react-router"
  // }
);
  // const router = createBrowserRouter(   //It is also another way to create a route.
  //   createRoutesFromElements(
  //     <Route>
  //     <Route path="/" element={<Home />}/>
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>
      
  //   )
  // )
  return (
    <>
    <RouterProvider router={router}/>;
    <h1>React Router</h1>
    
  


     
    </>
  )
}

export default App
