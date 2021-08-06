import "./contact.scss";
import { useState } from 'react';

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)

    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://image.flaticon.com/icons/png/512/4205/4205909.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    {message && <span>Thanks.Reach Me Through  Mobile (or)Email :) </span>}
                    <button type="submit">Sent</button>

                </form>
            </div>

        </div>
    )
}
