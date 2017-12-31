import React from 'react';

const Contact = () => (
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
    </section>
);

export default Contact;