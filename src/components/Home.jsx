import React, {Component} from 'react'
import About from './About';

class Home extends React.Component {
    render() {

        return (
            <div id="page">
                <header>
                    <div className="hero">
                        <div className="heading" id="home">Nyet Restaurant</div>
                        <br/>
                        <div className="subHeading">the way to eat</div>
                    </div>
                </header>

                <section ref="about" id="about" className="Section">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, ipsum explicari sit ea, an autem legendos
                        petentium est. Has velit paulo vocent ea, animal incorrupte suscipiantur vix te,
                        semper vituperatoribus est no. Sea fierent constituam ne. Simul vidisse
                        repudiare has ut, cu iudico ornatus tractatos sea. Cu viderer recusabo tincidunt
                        usu.
                    </p>
                </section>

                <section id="Service" className="Section">
                    <div id="imageServ">
                        <img src="../assets/Service.jpeg" alt="Service" height="128"/>
                    </div>
                    <div id="Servpara">
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
    }
}

export default Home;