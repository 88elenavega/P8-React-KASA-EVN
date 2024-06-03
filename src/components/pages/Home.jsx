//import { useState, useEffect } from "react"

import ImgNature from "../../assets/plagenuages.png"
//import Cards from "../pages/Cards"
//import Logements from "../../../public/logements.json"


export default function Home() {


    return (
        <div className="home">
            <div className="banner">
            <img src={ImgNature} alt="plage et montagne" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            
            <div className="accommodations">
                cards ici 
            </div>
        </div>
    )
}


//<Cards Logements={Logements}/>

