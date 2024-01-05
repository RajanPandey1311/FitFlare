import React, { useRef, useState } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_u5cjgvi',
        'template_8a54u9b',
        form.current,
        'h5oGvm41pN7nc8LcO'
      )
      .then(
        (result) => {
          console.log('done');
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        {!isSubmitted ? (
          <form className="email-container" ref={form} onSubmit={handleJoin}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your Email Address here..."
            />
            <button type="submit" className="btn btn-j">
              Join now
            </button>
          </form>
        ) : (
          <div className="success-message">
            Thank you for joining! We'll be in touch soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Join;
