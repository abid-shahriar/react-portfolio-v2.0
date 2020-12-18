import React from "react";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__wrapper">
        <div className="conatact__container">
          <form action="" className="Contact__form">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input name="name" type="text" placeholder="Your Name Here" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input name="email" type="text" placeholder="Your Email Here" />
            </div>
            <div className="message">
              <label htmlFor="message">Name</label>
              <input name="message" type="text" placeholder="Your Message" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
