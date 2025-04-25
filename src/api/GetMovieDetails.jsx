// export const getMoviesDetails = async({params})=>{
//     console.log(params);
//     const id = params.movieID;
//     try{
//         const response = await fetch(
//            `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`

//         );
//         console.log("Movie loader running");
//         const data = await response.json();
//         return data;

//     }catch(error){
//         console.log(error);
//         return null;
//     } 
// }


export const getMoviesDetails = async ({ params }) => {
    const id = params.movieID;
    console.log("Fetching movie details for ID:", id);  // Log the ID
  
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
      );
      console.log("API Response:", response);  // Log the response
  
      if (!response.ok) {
        console.log("Error:", response.status, response.statusText);
        throw new Error("Failed to fetch movie details");
      }
  
      const data = await response.json();
      console.log("Movie data received:", data);  // Log the received data
  
      return data;
  
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;  // Return null in case of error
    }
  };
  