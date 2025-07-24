import { useState } from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import Values from '../components/Values';
import Image from '../components/Image';

    function Contact() {

            return (
                <div className="page-wrapper flex column ai-flex-end">
                    <div className="contact-wrapper" >
                        <h1>Contact</h1>
                        <form className="contact-form">
                            <input 
                                type="text"
                                placeholder="First Name"
                                name="fname"
                                className="contact-input"
                                required
                            />
                            <input 
                                type="text"
                                placeholder="Last Name"
                                name="lname"
                                className="contact-input"
                                required
                            />
                            <input 
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="contact-input"
                                required
                            />
                            <textarea 
                                type="textarea"
                                placeholder="Message"
                                name="message"
                                required
                            />
                            {/* <div className="contact-bttn-container">
                                <button className="contact-bttn">Send</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            );
    }
    
    export default Contact;