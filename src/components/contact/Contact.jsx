import React from "react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__wrapper">
        <div className="contact__container">
          <form action="" className="contact__form">
            <div className="name">
              <label htmlFor="name">Your Name</label>
              <input
                required
                name="name"
                type="text"
                placeholder="example: john Doe"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Your Email</label>
              <input
                required
                name="email"
                type="text"
                placeholder="example: johndoe@gmail.com"
              />
            </div>
            <div className="message">
              <textarea required name="message" placeholder="Your Message" />
            </div>

            <div className="btn">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
}
