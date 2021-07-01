import React,{useEffect, useState} from "react"; 
import Movie from "./componets/Movie"  
import EButton from "./componets/EButton"





const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7168de106795e43056af6d6b08af9e7c";
 



const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=7168de106795e43056af6d6b08af9e7c&language=en-US&page=1&include_adult=false&query="



function App() {  
    
  const [movies, setMovies ] = useState([]);  
  const [searchTerm, setSearchTerm] = useState(" ")  
  
  


  useEffect(async () =>{
    fetch(FEATURED_API).then(res =>res.json())
    .then(data => { 
      console.log(data)
      setMovies(data.results)
    }) 

  },[])


  const handleOnSubmit =(e) => {
    e.preventDefault();  

    fetch(SEARCH_API+searchTerm ).then(res =>res.json())
    .then(data => { 
      console.log(data)
      setMovies(data.results)  



      if (data.results <=0 ) {
        console.log("this movie is movie is not found");   
      }
    })   

 
  }
  

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (

        <>



    <header>  
      <form   onSubmit={handleOnSubmit}>
     
      <input  type="search"  className="search"  placeholder="searc movie ...."   value={searchTerm} onChange={handleOnChange}/>

      </form>

      
    </header>   

    <section className="emotion-bar">
      <h1>What are you feeling?</h1>  

      <EButton/>
      
    </section>
   
    <div className="movie-container">
   

        

      {movies.length > 0 && movies.map((movie)=>(
          <Movie  key={movie.id} {...movie}/>    
          



      ))} 
    


    </div> 

    </>
  );
}

export default App;
