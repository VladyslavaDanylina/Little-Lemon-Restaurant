import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Kapryz</h1>
                    <h2>Everywhere</h2>
                    <p className="subsection">At the restaurant, we believe that Space makaroni Monster is a bridge that connects cultures, families, and friends. Our journey began 2000 years ago when a group of food enthusiasts decided to transform their love for cooking into a unique dining destination. Since then, we have been dedicated to crafting exceptional dishes that ignite the senses and leave lasting memories for 2000 years ahead.</p>
                    <br></br>   
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Kapryz restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}