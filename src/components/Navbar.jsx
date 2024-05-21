import { Link } from 'react-router-dom' 

function Home() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">À Propos</Link>
        </nav>
    )
}

export default Home 