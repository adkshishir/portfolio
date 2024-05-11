import Image from 'next/image';
import React from 'react';
const page = () => {
  return (
    <>
      {/*portfolio*/}
      <div
        style={{
          backgroundColor: '#101010',
          color: 'white',
        }}>
        <div className='portfolio-header'>
          {' '}
          <span className='color'> My </span> Portfolio
          <span className='header-caption'>
            {' '}
            Some Of My <span className='color'> Works</span>
          </span>
        </div>
        <div id='portfolio-content'>
          <div className='portfolio portfolio-first'>
            <div className='portfolio-image'>
              <Image
                height={1300}
                width={1300}
                className='img-fluid'
                style={{ objectFit: 'cover' }}
                src='/images/sastotickets.png'
                alt='portfolio-first'
              />
            </div>
            <div className='portfolio-text'>
              <h2>Sastotickets</h2>
              <p>
                I have been working in sastotickets for 2 months. It is a
                popular website for booking tickets. It is fully responsive.
                {/* bug fixing  */}
                <br />
              </p>
              <div className='button'>
                <a href='https://sastotickets.com' target='_blank'>
                  <button>
                    <span className='index'>
                      {' '}
                      View Project
                      <i className='gg-arrow-right' />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='portfolio portfolio-second'>
            <div className='portfolio-image'>
              <Image
                height={1300}
                width={1300}
                src={'/images/munchymo.png'}
                style={{ objectFit: 'cover' }}
                alt='portfolio-second'
              />
            </div>
            <div className='portfolio-text'>
              <h2>Munchy Mo</h2>
              <p>
                This is a resturant website . Made with sveltekit. I completed
                this project in less than 1 month in starting days of my job in
                Skybase innovations.
              </p>
              <div className='button'>
                <a href='https://munchymo.com/' target='_blank'>
                  <button>
                    <span className='index'>
                      {' '}
                      View Project
                      <i className='gg-arrow-right' />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='portfolio portfolio-third'>
            <div className='portfolio-image'>
              <Image
                src={'/images/hinepaltreks.png'}
                alt='portfolio-third'
                height={1300}
                width={1300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='portfolio-text'>
              <h2>Hi Nepal travels and treks</h2>
              <p>
                This is the website of Hi Nepal. It is fully responsive. And
                this is my first client website . owner Mohan Subedi
              </p>
              <div className='button'>
                <a href='https://hinepaltreks.com/' target='_blank'>
                  <button>
                    <span className='index'>
                      {' '}
                      View Project
                      <i className='gg-arrow-right' />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='portfolio portfolio-fourth'>
            <div className=' portfolio-image'>
              <Image
                src={'/images/astro.png'}
                alt='portfolio-third'
                height={1300}
                width={1300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='portfolio-text'>
              <h2>Astro Hotel</h2>
              <p>I work on the Astro Hotel. I involve in this project .</p>
              <div className='button'>
                <a href='https://www.astrohotelnepal.com/' target='_blank'>
                  <button>
                    <span className='index'>
                      {' '}
                      View Project
                      <i className='gg-arrow-right' />
                    </span>
                  </button>
                </a>
              </div>
            </div>
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
      {/*portfolio end*/}
    </>
  );
};

export default page;
