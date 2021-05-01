import React from 'react';
import home1 from '../img/home1.jpg'

function AboutSection() {
  return (
    <div>
      <div className="desciption">
        <div className="title">
          <div className="hide">
            <h2>We Work To Make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>Come True</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
          <img src={home1} alt="Guy with Camera" />
      </div>
    </div>
  );
}

export default AboutSection;
