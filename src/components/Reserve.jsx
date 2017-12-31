import React from 'react';
import Footer from './Footer';
const Reserve = () => {
    return (
        <div>
            <div id="ReserveHero">
                <h3>
                    <span>Reservations</span>
                </h3>
                <p>We accept a limited number of reservations in advance upto one month</p>
            </div>
            <div id="Book">
                <p>Call (+91)97XXXXXX to make a reservation</p>
            </div>
            <div id="ReserveDetails">
                <div id="ByPhone">
                    <h4>By Phone</h4>
                    <p>Prefer to make reservation via phone?</p>
                    <p>+9197XXXXXXX</p>
                </div>
                <div id="Events">
                    <h4>Special Events and Private Paries</h4>
                    <p>petentium est. Has velit paulo vocent ea, animal incorrupte</p>
                    <p>Lorem ipsum dolor sit amet, ipsum explicari sit ea, an autem</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Reserve;