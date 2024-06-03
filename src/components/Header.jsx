import LogoKasa from "../assets/logo kasa 1.png"
import { NavLink } from "react-router-dom"


export default function About() {
    return (
        <div className="header">
        
            <img src={LogoKasa} alt="Kasa logo" />
        
            <div className="header--display">
                <NavLink to="./" className={({isActive}) => (isActive ? "underline" : "")}>
                    <p>Accueil</p>
                </NavLink>

                <NavLink to="./about" className={({isActive}) => (isActive ? "underline" : "")}>
                    <p>A propos</p>
                </NavLink>
            </div>
        
        </div>
    )
}