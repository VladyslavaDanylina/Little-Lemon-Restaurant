export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Kapryz</h1>
                <h2>Everywhere</h2>
                <p className="about-subtext">At the restaurant, we believe that space makaroni monster is a bridge that connects cultures, families, and friends. Our journey began 2000 years ago when a group of food enthusiasts decided to transform their love for cooking into a unique dining destination. Since then, we have been dedicated to crafting exceptional dishes that ignite the senses and leave lasting memories for 2000 years ahead.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}