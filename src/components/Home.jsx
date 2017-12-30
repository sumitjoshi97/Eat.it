import React, {Component} from 'react'

const Home = () => {
    return (
        <div id="page">
            <header>
                <div className="hero">
                    <div className="heading">Nyet Restaurant</div>
                    <br/>
                    <div className="subHeading">the way to eat</div>
                </div>
            </header>

            <section id="Service" className="Section">
                <div id="imageServ">
                    <img src="../assets/Service.jpeg" alt="Service" height="128"/>
                </div>
                <div id="Servpara">
                <h3>Service to customers</h3>
                    <p>Lorem ipsum dolor sit amet, ipsum explicari sit ea, an autem legendos 
                    petentium est. Has velit paulo vocent ea, animal incorrupte suscipiantur vix te, 
                    semper vituperatoribus est no. Sea fierent constituam ne. Simul vidisse repudiare
                     has ut, cu iudico ornatus tractatos sea. Cu viderer recusabo tincidunt usu.
                    </p>
                </div>
            </section>
        </div>

    )
}

export default Home;