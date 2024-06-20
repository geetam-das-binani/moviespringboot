import { useOutletContext } from "react-router-dom"
import Hero from "./hero/Hero";

const Home = () => {
 const {movies} = useOutletContext();

  return  <Hero movies={movies} />
    
  
}

export default Home
