import React, { useState } from 'react'
import './landing-page.css';
import Gameplan from "./assets/GamePlan.png"
import Habits from "./assets/Habits.png"
import PDF from "./assets/PDFs.png"
import WhatsApp from "./assets/Captura.jpg"
import FirstImage from "./assets/first-image.jpg"
import LittleImagesComponent from './components/little-images/LittleImagesComponent';

function LandingPage() {
  
  const imageUrls = [FirstImage, Gameplan, PDF, Habits, WhatsApp ];
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const redirectToPayment = function() {
    window.location.href = "https://buy.stripe.com/8wM4i4eyf7DA1RmaEE"
  }

  return (
    <div className='landing-wrapper'>
      <div className='quarter-empty'></div>
      <div className='center-third'>
        <div className='center-content-wrapper'>
          <h2>Imaan Boosting Protocol</h2>
          <div className='img-container'>
            <img className='large-img' src={selectedImage} alt="Selected" />
          </div>
          <div className='img-selector'>
            {imageUrls.map((url, index) => (
              <LittleImagesComponent
                key={index}
                url={url}
                onClick={() => handleImageClick(url)}
                isSelected={selectedImage === url}
              />
            ))}
          </div>
          <h3><b>This Protocol is for You if:</b></h3>
          <h3>You're a young Muslim man striving to deepen your connection with Allah, but feel stuck despite your efforts.</h3>
          <h3>You're struggling with profound sins like music, HARAM content and more.</h3>

          <h3><br/><b>What I Will Help You With:</b></h3>
          <h3>One-on-one sessions where I'll create a tailored plan just for you that strengthens your faith and guides you towards being a better muslim.
          </h3>
          <h3>I'll hold you accountable every step of the way, inshAllah.</h3>

          <h3><br/><b>What You'll Get:</b></h3>
          <h3><b> · </b> Two Weekly Video Calls</h3>
          <h3><b> · </b> Tailored strategies designed specifically for you.</h3>

          <h3><br/><b>Bonuses:</b></h3>
          <h3>Daily Messaging on WhatsApp for accountability and feedback purposes.</h3>
          <h3>Elaborated PDFs on how to quit sins, using a tested method.</h3>
          <h3>Video Courses about Imaan and Imaan disruptors.</h3>
          <h3>A Habit Tracker with the Actionable Steps designed for you.</h3>

          <h3><br/>The First Person To Buy It Will Have It For 15€/mo, after that, the price will go up forever.</h3>
          <h3><br/>Full Refund Available if notified before 7 days after buying the subscription.</h3>

        </div>
      </div>
      <div className='right-third'>
      <div className='right-content-wrapper'>
      <h2>Imaan Boosting Protocol</h2>
      <h3>Do Your Best To Become a Better Muslim</h3>
      <button onClick={() => {redirectToPayment()}} className="button-32" role="button">JOIN 15€/month</button>
      </div>

      </div>
    </div>
  );
}

export default LandingPage