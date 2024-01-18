import React from 'react';
import MyButton from "../components/button/button";
import NavigationMenu from "../components/navigation/navigation_menu";
import Skills from "../components/skills/skillset";
import Carousel from "../components/carousel/carousel";
import Carousel_text from "../components/carousel/carousel_text";
import Footer_text from "../components/footer/footer_text";
import About_Me from "../components/about-me/about_me";


function Homepage() {
    return (
        <div>
            <section id="navigation">

                <div>
                    <NavigationMenu></NavigationMenu>
                </div>
            </section>
            <section id="skill">
                {<Skills></Skills>}
            </section>
            <section id="about-me">
                {<div>
                    <About_Me></About_Me>
                </div>}
            </section>
            <section id="my-work">
                <Carousel_text></Carousel_text>
                {<div>
                    {<Carousel></Carousel>}
                    </div>}
            </section>
            <section id="contact">
                {<div>
                    <Footer_text></Footer_text>
                    </div>}
            </section>

        </div>
    );
}
export default Homepage;
