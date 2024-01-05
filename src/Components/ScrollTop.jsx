import { useEffect, useContext } from "react";
import { AppContext } from "../App";
import './ScrollTop.css'

export const ScrollTop = () =>{
    const { mediumScreen } = useContext(AppContext)
 
    if(document.documentElement.scrollTop > 800 && mediumScreen){

        return(
            <a href="#Home" className='btn bg-blue text-white top'><i className="bi bi-arrow-up"></i></a>
        )
    }else{

    }
}