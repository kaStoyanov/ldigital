import React from 'react'
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types'

const Contact = (props) => (
  
    <section id="contact">
        
        <div className="inner">
            <section>
                <form method="post" action="#" onSubmit={props.sendEmail}>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">contact@ldigital.bg</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+359 889216996</span>
                    </div>
                </section>
               
            </section>
        </div>
    </section>
    
)
Contact.propTypes = {
    sendEmail: PropTypes.func
}

export default Contact
