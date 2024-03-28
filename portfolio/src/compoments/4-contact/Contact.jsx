import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <section className='contact-us'>
            <h1 className='title'>
                <span className=''></span>
                Contact Us
            </h1>
            <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
        
          </div>

          <button type="submit" className="submit">
            
Submit          </button>

          
        </form>
        </div>
        </section>
    );
}

export default Contact;
