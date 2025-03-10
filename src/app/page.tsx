'use client';
import React, { useEffect, useState } from 'react';
import Particle from '../components/Particle';

const page = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  let textArray = [
    'React Developer.',
    'Node/Express Developer.',
    'NestJS Developer.',
    'MERN Stack Developer.',
    'Full Stack Developer.',
  ];
  let textIndex = 0;
  let charIndex = 0;
  const [typingText, setTypingText] = useState(
    textArray[textIndex].substring(0, charIndex)
  );
  function type() {
    if (charIndex < textArray[textIndex].length) {
      setTypingText(textArray[textIndex].substring(0, charIndex + 1));
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed here (milliseconds)
    } else {
      setTimeout(erase, 1000); // Time before erasing (milliseconds)
    }
  }

  function erase() {
    if (charIndex > 0) {
      setTypingText(textArray[textIndex].substring(0, charIndex - 1));
      charIndex--;
      setTimeout(erase, 50); // Adjust erasing speed here (milliseconds)
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, 500); // Time before typing next text (milliseconds)
    }
  }

  useEffect(() => {
    setToggle(true);
    type();
  }, []);
  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <div>
      <Particle />

      <div>
        {/*Social Media Links*/}
        <div className='social-media-links'>
          <a href='https://www.instagram.com/shishir0605/'>
            <img
              src='images/instagram logo.png'
              className='social-media'
              alt='instagram-logo'
            />
          </a>
          {/*Your instagram homepage link inser in place of "#"*/}
          <a href='https://www.facebook.com/shishir0605'>
            <img
              src='images/facebook logo.png'
              className='social-media'
              alt='facebook-logo'
            />
          </a>
          <a href='https://www.linkedin.com/in/shishir-adhikari-917432254/'>
            <img
              src='images/linkedin logo.png'
              className='social-media'
              alt='linkedin-logo'
            />
          </a>
          {/* <a href="#"><img src="images/twitter logo.png" class="social-media" alt="twitter-logo"></a> */}
        </div>
        {/*Social Media Links end*/}
        <div className='header-content'>
          <div className='header-content-box'>
            <div className=' firstline '>
              <span className='color'>Shishir</span>Adhikari
            </div>
            <div className='secondline '>
              I'm a &nbsp;
              <span className='color'>{typingText}</span>
              <span className='slash'>|</span>
            </div>
          </div>
          <div className='contact'>
            <a href='Mailto:adhikarishishir50@gmail.com'>
              <img
                src='images/mail.png'
                alt='email-pic'
                className='contactpic'
              />
            </a>
            {/*Your email Id write in place of "#"*/}
            <a href='Tel:+977 9806680725'>
              <img
                src='images/call.png'
                alt='phone-pic'
                className='contactpic'
              />
            </a>
            {/*Your telephone number Id write in place of "#"*/}
          </div>
        </div>
      </div>
      {/*header image*/}
      <div className='header-image'>
        <img style={{ opacity: '0.2' }} src='images/shishir.jpeg' alt='logo' />
      </div>
      {/*header image end*/}
    </div>
  );
};

export default page;
