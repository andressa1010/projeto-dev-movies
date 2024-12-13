import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/header/header";


const DefaultLeyout = () => {
    return (
        <>
        <Header/>
         <Outlet/>
        </>
      );
}
 
export default DefaultLeyout;