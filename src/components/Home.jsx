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
                <img src="../assets/Service.jpeg" alt="Service"/>
            </div>
        </section>
        </div>
        
    )
}

export default Home;