import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import BakedApple from '../../../assets/food/item1.jpeg';
import Cheesecake from '../../../assets/food/item2.jpeg';
import PannaCotta from '../../../assets/food/item3.jpeg';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
                <SpecialCard image={BakedApple} name="Baked Apple" price="$12.99" description="The apple is cored and filled with ingredients like cinnamon, brown sugar, and butter, then baked until tender. "/>
                <SpecialCard image={Cheesecake}name="Raspberry cheesecake " price="$16.99" description="Creamy cheesecake paired with the bright sweetness of raspberries."/>
                <SpecialCard image={PannaCotta} name="Panna Cotta" price="$8.50" description="Panna Cotta base topped with mint and fruits"  />
        </Carousel>
    )
}