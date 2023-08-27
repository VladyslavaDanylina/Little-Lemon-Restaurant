import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
            <TestimonialCard name="Emily Johnson" description="The service was top-notch; the staff, including our server, Rachel, were attentive and friendly. I'll definitely be coming back for more!"/>
            <TestimonialCard name="Michael Williams" description="I tried their curry platter, and it was a journey through different spice profiles."/>
            <TestimonialCard name="Jessica Martinez" description="The authenticity of their Italian cuisine is remarkable. "/>
            <TestimonialCard name="David Thompson" description="I went during the lunch rush, so service was a tad slow, but once the food arrived, I was in heaven. "/>
            <TestimonialCard name="Sarah Miller" description=" From the moment we walked in, the atmosphere was charming and welcoming. The menu offered a wide range of dishes, and every item we ordered was a burst of flavor."/>
            <TestimonialCard name="Benjamin Davis" description="I particularly loved the attention to dietary preferences. As a vegetarian, I had plenty of options, and each one was delicious. The service was friendly and efficient, thanks to our server, Sarah."/>
            <TestimonialCard name="Olivia Thompson" description="Their wine selection perfectly complemented the dishes. The attention to detail in presentation was impressive."/>
            <TestimonialCard name="Ethan Rodriguez" description="The attention to detail in every aspect, from the décor to the food, was evident. The dishes were innovative yet rooted in classic flavors. "/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}