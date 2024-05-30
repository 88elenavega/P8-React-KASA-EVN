import LogoKasa from "../logo kasa 1.png"



const Header = () => {
    return (
        <div className="header">
            <p>test affichage header</p>
        
        <img src="{LogoKasa}" alt="Kasa logo">
        
            <div>
                <a>Accueil</a>
                <a>A propos</a>
            </div>
        
        </div>
    )

}

export default Header