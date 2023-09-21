
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import location from '../images/icons8-location-30.png'
import telephone from '../images/icons8-telephone-30.png'
import mail from '../images/icons8-mail-30.png'
import linkedin from '../images/icons8-linkedin-48.png'
import git from '../images/icons8-github-50.png'

const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9mfsctp', 'template_ur56yvo', form.current, 'x-2zg1A9bYVp_xD8-')
            .then((result) => {
                console.log(result.text);
                alert("Thank you for your message.")
            }, (error) => {
                console.log(error.text);
                alert("Message not sent.")
            });
            e.target.reset()
    };
    return (
        <div className='contact'>
            <h1>Get in <span>Touch</span></h1>
            <hr />
            <div className='bottom-contact'>
                <div className="contact-left">
                    <div className='location'>
                        <img src={location} />
                        <p>Kocaeli/İzmit</p>
                    </div>
                    <div className='location'>
                        <img src={telephone} />
                        <p>+90 542 392 16 02</p>
                    </div>
                    <div className='location'>
                        <img src={mail} />
                        <p>emretrabzonluu@gmail.com</p>
                    </div>
                    <div className='location'>
                        <img src={linkedin} />
                        <a href='https://www.linkedin.com/in/emre-t%C4%B1rabzonlu-098356202/'>@emretirabzonlu</a>
                    </div>
                    <div className='location'>
                        <img src={git} />
                        <a href='https://github.com/emretirabzonlu'>@emretirabzonlu</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-right">
                    <div className='info-message'>
                        <input name="user_name" type="text" className="form-control" id="nameText" placeholder='Name' required />
                        <input name="user_email" type="email" className="form-control" id="emailText" placeholder='Email' required />
                    </div>
                    <div className='message'>
                        <textarea name="message" className="form-control" id="messageText" placeholder='Message' cols="30" rows="10"></textarea>
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact