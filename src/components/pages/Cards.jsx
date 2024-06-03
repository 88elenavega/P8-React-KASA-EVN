
import PropTypes from "prop-types";


export default function Cards({Logements}) {
    return (

        <div className="cards" key={Logements.id}>
            <img src={Logements.image} alt={Logements.title} />
            <h2>{Logements.title}</h2>
        </div>
    )
}




Cards.propTypes = {
    Logements: PropTypes.array.isRequired
}

