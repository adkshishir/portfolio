import React from 'react';

const page = () => {
  return (
    <>
      {/*contact*/}
      <div>
        <div className='contact-header'>
          Contact <span className='color'> Me</span>
          <div className='contact-header-caption'>
            {' '}
            <span className='color'> Get</span> In Touch.
          </div>
        </div>
        <div className='contact-content'>
          {/*Contact form*/}
          <div className='contact-form'>
            <div className='form-header'>Message Me</div>
            <form id='myForm' action='#'>
              <div className='input-line'>
                <input
                  id='name'
                  type='text'
                  placeholder='Name'
                  className='input-name'
                />
                <input
                  id='email'
                  type='email'
                  placeholder='Email'
                  className='input-name'
                />
              </div>
              <input
                type='text'
                id='subject'
                placeholder='subject'
                className='input-subject'
              />
              <textarea
                id='body'
                className='input-textarea'
                placeholder='message'
                defaultValue={''}
              />
              <button type='button' id='submit' value='send'>
                Submit
              </button>
            </form>
          </div>
          {/*Contact form*/}
          {/*Contact information*/}
          <div className='contact-info'>
            <div className='contact-info-header'>Contact Info</div>
            <div className='contact-info-content'>
              <div className='contect-info-content-line'>
                <img
                  src='./images/icon-name.png'
                  className='icon'
                  alt='name-icon'
                />
                <div className='contact-info-icon-text'>
                  <h6>Name</h6>
                  <p>Arlo Brown</p>
                </div>
              </div>
              <div className='contect-info-content-line'>
                <img
                  src='./images/icon-location.png'
                  className='icon'
                  alt='location-icon'
                />
                <div className='contact-info-icon-text'>
                  <h6>Location</h6>
                  <p>New York, USA</p>
                </div>
              </div>
              <div className='contect-info-content-line'>
                <img
                  src='./images/icon-phone.png'
                  className='icon'
                  alt='phone-icon'
                />
                <div className='contact-info-icon-text'>
                  <h6>Call</h6>
                  <p>+9865376531</p>
                </div>
              </div>
              <div className='contect-info-content-line'>
                <img
                  src='./images/icon-email.png'
                  className='icon'
                  alt='email-icon'
                />
                <div className='contact-info-icon-text'>
                  <h6>Email</h6>
                  <p>Info@example.com</p>
                </div>
              </div>
            </div>
            {/*Contact information end*/}
          </div>
        </div>
        {/*copyright-section You Can Remove After Downloading*/}
        <div className='footer'>
          <div className='footer-text'>
            <img
              src='./images/copyright.png'
              alt='copyright-img'
              className='images'
              height='14px'
            />{' '}
            Shishir Adhikari
          </div>
        </div>
        {/*copyright-section*/}
      </div>
      {/*contact end*/}
    </>
  );
};

export default page;
