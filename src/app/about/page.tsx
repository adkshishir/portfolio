import React from 'react';

const page = () => {
  return (
    <div
      style={{
        backgroundColor: '#101010',
      }}>
      {' '}
      {/*about content*/}
      <div id='about-content'>
        <div className='about-header'>
          About <span className='color'>Me</span>
          <span className='header-caption'>
            Get to Know <span className='color'> me.</span>
          </span>
        </div>
        <div className='about-main'>
          <div className='about-first-paragraph wow'>
            {/*about description*/}
            <span className='about-first-line'>
              I'm creative
              <span className='color'>web developer</span>
              based in Pokhara, Nepal
            </span>
            <br />
            <span className='about-second-line'>
              {' '}
              With 1.5 years plus of experience as a professional Web developer,
              I have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step while working.
            </span>
            {/* <div className='cv'>
              <a href='#'>
                <button>
                  Download <span className='colors'>CV</span>
                </button>
              </a>
            </div> */}
          </div>
          {/*about picture*/}
          <div className='about-img'>
            <img
              src='images/shishir.jpeg'
              style={{ objectFit: 'cover' }}
              alt='Your Image'
            />
          </div>
        </div>
      </div>
      {/*services header*/}
      {/* <div className='services-heading wow'>
        <span className='color'>My</span> Services
      </div> */}
      {/*services header end*/}
      {/*  */}
      {/*services content*/}
      {/* <div className='services-content'>
        <div className='service-one service wow'>
          <div className='service-img'>
            <img src='images/coding.png' alt='service-one' />
          </div>
          <div className='service-description'>
            <h2>Web Designing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              quibusdam possimus
            </p>
          </div>
        </div>
        <div className='service-two service wow'>
          <div className='service-img'>
            <img src='images/instagram.png' alt='service-two' />
          </div>
          <div className='service-description'>
            <h2>Social Media</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              quibusdam possimus
            </p>
          </div>
        </div>
        <div className='service-three service wow'>
          <div className='service-img'>
            <img src='images/bulb.png' alt='service-three' />
          </div>
          <div className='service-description'>
            <h2>Web Hosting</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              quibusdam possimus
            </p>
          </div>
        </div>
      </div> */}
      {/*services content end*/}
      {/* skills */}
      <div id='skills'>
        <div className='skills-header'>
          My <span className='color'> Skills</span>
        </div>
        <div className='skills-content ' style={{ textAlign: 'center' }}>
          <div className='skill-html skill'>
            <div className='skill-text'>
              <div className='html'>HTML/CSS</div>
            </div>
            <div className='html-prog wow prog'>
              <div className='html-progress wow'>95%</div>
            </div>
          </div>
          <div className='skill-html skill'>
            <div className='skill-text'>
              <div className='html'>Javascript/Typescript</div>
            </div>
            <div className='html-prog wow prog'>
              <div className='js-progress wow'>90%</div>
            </div>
          </div>
          <div className='skill-html skill'>
            <div className='skill-text'>
              <div className='html'>PHP/Laravel</div>
            </div>
            <div className='html-prog wow prog'>
              <div className='adobe-progress wow'>60%</div>
            </div>
          </div>
          <div className='skill-html skill'>
            <div className='skill-text'>
              <div className='html'>React/Next.js</div>
            </div>
            <div className='html-prog wow prog'>
              <div className='php-progress wow'>83%</div>
            </div>
          </div>
          <div className='skill-html skill'>
            <div className='skill-text'>
              <div className='html'>Svelte Kit</div>
            </div>
            <div className='html-prog wow prog'>
              <div className='jquery-progress wow'>80%</div>
            </div>
          </div>
          <div className='skill-html skill'>
            <div className='skill-text'>
              <div className='html'>SEO</div>
            </div>
            <div className='html-prog wow prog'>
              <div className='seo-progress wow'>54%</div>
            </div>
          </div>
        </div>
      </div>
      {/* skills end */}
      {/* footer */}
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
      {/* footer */}
    </div>
  );
};

export default page;
