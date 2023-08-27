import Carousel from './SpecialsCarousel';
import BakedApple from '../../../assets/food/item1.jpeg';
import Cheesecake from '../../../assets/food/item2.jpeg';
import PannaCotta from '../../../assets/food/item3.jpeg';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.jpeg')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={BakedApple} name="Baked Apple" price="$12.99" description="The apple is cored and filled with ingredients like cinnamon, brown sugar, and butter, then baked until tender. "/>
                <SpecialCard image={Cheesecake}name="Raspberry cheesecake " price="$16.99" description="Creamy cheesecake paired with the bright sweetness of raspberries."/>
                <SpecialCard image={PannaCotta} name="Panna Cotta" price="$8.50" description="Panna Cotta base topped with mint and fruits"  />          
                </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}