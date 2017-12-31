import React from 'react';
import Footer from './Footer';
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
            <div id="imageServ" className="subSection">
                <img src={require("../assets/Seating.jpg")} alt="Service"/>
            </div>
            <div id="Servpara" className="subSection">
                <h3>Service to customers</h3>
                <p>Lorem ipsum dolor sit amet, ipsum explicari sit ea, an autem legendos
                    petentium est. Has velit paulo vocent ea, animal incorrupte suscipiantur vix te,
                    semper vituperatoribus est no. Sea fierent constituam ne. Simul vidisse
                    repudiare has ut, cu iudico ornatus tractatos sea. Cu viderer recusabo tincidunt
                    usu.
                </p>
            </div>
        </section>

        <section id="contact" className="Section">
            <div id="contactDetails">
                <h3>Contact us</h3>
                <p>+9197XXXXXXXX</p>
                <p>91, Jump Street</p>
                <p>New York</p>
            </div>

            <div id="contactSubmit" className="subSection">
                <input type="email" placeholder="Your Email"/>
                <br/>
                <button type="Submit">Send</button>
            </div>
            {/* <div id="contactImg" className="subSection">
                <img src={require("../assets/Contact.jpeg")} alt=""/>
            </div> */}
        </section>

        <Footer />
    </div>

)

export default Home;