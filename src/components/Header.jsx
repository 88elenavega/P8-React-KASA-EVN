//import LogoKasa from "../logo kasa 1.png"
import { NavLink } from "react-router-dom"


export default function About() {
    return (
        <div className="header">
            <p>test affichage header</p>
        
        <img src="{LogoKasa}" alt="Kasa logo">
        
            <div>
                <NavLink to="./">
                    <a>Accueil</a>
                </NavLink>

                <NavLink to="./about">
                    <a>A propos</a>
                </NavLink>
            </div>
        
        </div>
    )
}