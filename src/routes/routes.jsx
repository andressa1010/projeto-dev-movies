import { Route , Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Filmes from "../Pages/Movies/filmes";
import Series from "../Pages/Series/series";
import DefaultLeyout from "../Layout/defaultLeyout";


const Router = () => {
    return (
        <>

        <Routes>
            <Route element={<DefaultLeyout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/filmes" element={<Filmes/>}/>
            <Route path="/series" element={<Series/>}/>
            </Route>
           
        </Routes>
        
        </>
      );
}
 
export default Router;