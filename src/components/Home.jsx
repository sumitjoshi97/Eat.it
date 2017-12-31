import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Service from './Service';
import About from './About';
import Contact from './Contact';

const Home = () => (

    <div id="page">
        <Header />
        <About/>

        <section id="Food">
            <p>We provide a range of taste</p>
        </section>

        <Service/>
        <Contact/>
        <Footer/>
    </div>

)

export default Home;