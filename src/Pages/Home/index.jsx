import React from "react";
import api from "../../services/api.js";
import { Background } from "./styled.js";


async function getMovies(){
    const data = await api.get("/movie/popular")

    console.log(data)
}


getMovies()


const Home = () => {
    return ( 
        <>
      <Background img={" https://api.themoviedb.org/3/oEiuj2Iv4SUEEWx0FJCLjplNunA.jpg"}>

      </Background>
        </>
     );
}
 
export default Home;