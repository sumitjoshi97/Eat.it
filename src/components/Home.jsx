import React, {Component} from 'react'
// import About from './About';

const Home = () => (

    <div id="page">
        <header>
            <div className="hero">
                <div className="heading" id="home">Nyet Restaurant</div>
                <br/>
                <div className="subHeading">the way to eat</div>
            </div>
        </header>

        <section id="about" className="Section">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet, ipsum explicari sit ea, an autem legendos
                petentium est. Has velit paulo vocent ea, animal incorrupte suscipiantur vix te,
                semper vituperatoribus est no. Sea fierent constituam ne. Simul vidisse
                repudiare has ut, cu iudico ornatus tractatos sea. Cu viderer recusabo tincidunt
                usu.
            </p>
        </section>

        <section id="Food">
            <p>We provide a range of taste</p>
        </section>

        <section id="Service" className="Section">
            <div id="imageServ" className="ServSection">
                <img src={require("../assets/Seating.jpg")} alt="Service" />
            </div>
            <div id="Servpara" className="ServSection">
                <h3>Service to customers</h3>
                <p>Lorem ipsum dolor sit amet, ipsum explicari sit ea, an autem legendos
                    petentium est. Has velit paulo vocent ea, animal incorrupte suscipiantur vix te,
                    semper vituperatoribus est no. Sea fierent constituam ne. Simul vidisse
                    repudiare has ut, cu iudico ornatus tractatos sea. Cu viderer recusabo tincidunt
                    usu.
                </p>
            </div>
        </section>
    </div>

)

export default Home;