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
              <img src='images/portfolio-first.jpg' alt='portfolio-first' />
            </div>
            <div className='portfolio-text'>
              <h2>App Idea</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut
                optio repellat cupiditate expedita eius dignissimos. Id cumque
                placeat minima ad laudantium suscipit voluptatem ducimus
              </p>
              <div className='button'>
                <a href='#'>
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
              <img src='images/portfolio-second.jpg' alt='portfolio-second' />
            </div>
            <div className='portfolio-text'>
              <h2>Web Designing</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                cumque placeat minima ad laudantium suscipit voluptatem ducimus.
                Id cumque placeat minima ad laudantium suscipit voluptatem
                ducimus
              </p>
              <div className='button'>
                <a href='#'>
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
              <img src='images/portfolio-third.jpg' alt='portfolio-third' />
            </div>
            <div className='portfolio-text'>
              <h2>UI Designing</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut
                optio repellat cupiditate expedita eius dignissimos .. Id cumque
                placeat minima ad laudantium suscipit voluptatem ducimus
              </p>
              <div className='button'>
                <a href='#'>
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
              <img src='images/portfolio-fourth.jpg' alt='portfolio-fourth' />
            </div>
            <div className='portfolio-text'>
              <h2>Wow Graphics</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ut
                optio repellat cupiditate expedita eius dignissimos. Id cumque
                placeat minima ad laudantium suscipit voluptatem ducimus
              </p>
              <div className='button'>
                <a href='#'>
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
            Willy Wonkas
          </div>
        </div>
        {/*copyright-section*/}
      </div>
      {/*portfolio end*/}
    </>
  );
};

export default page;
