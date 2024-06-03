// just a template - to modify



import { NavLink } from "react-router-dom"


export default function About() {
    return (
        <div className="header">
        
            <div className="header--display">
                <NavLink to="./" className={({isActive}) => (isActive ? "underline" : "")}>
                    <p></p>
                </NavLink>

                <NavLink to="./about" className={({isActive}) => (isActive ? "underline" : "")}>
                    <p></p>
                </NavLink>
            </div>
        
        </div>
    )
}