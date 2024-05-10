import React from 'react';

const page = () => {
  return (
    <>
      {/*blog*/}

      <div>
        <div className='blog-header'>
          {' '}
          Blogs
          <span className='header-caption'>
            {' '}
            My Latest <span className='color'> blog posts.</span>
          </span>
        </div>
        <div className='blog-content'>
          <div className='blogs'>
            <a href='#'>
              <div className='img'>
                <img src='images/blog-one.jpeg' alt='blog-one' />
                <div className='blog-date'>8 May</div>
              </div>
              <div className='blog-text'>
                <h3>What is Full Stack ?</h3>
                <p>
                  In the world of web development and applications, front-end
                  and back-end refer to the two sides of the coin that make
                  everything work. Here's a breakdown of their definitions:{' '}
                  <br />
                  Front-end: This is the user interface (UI), the part you see
                  and interact with. It's like the storefront of a physical
                  store. Imagine a website – the buttons you click, menus you
                  navigate, text you read, and images you see – that's all
                  front-end. Front-end developers use languages like HTML, CSS,
                  and JavaScript to build these interactive interfaces. <br />
                  Back-end: This is the engine room, the part that runs behind
                  the scenes. It's like the warehouse and stockroom of the
                  store. The back-end handles data storage, processing, and
                  server communication. When you click a button on the
                  front-end, the back-end kicks in, retrieves information from a
                  database (like checking stock in the warehouse), and delivers
                  it back to the front-end to update what you see. Back-end
                  developers use languages like Java, Python, or PHP to build
                  and manage these functionalities. <br /> <br />
                  for example : Imagine the human body as a website. The
                  front-end, like our skin, hair, and eye color, is determined
                  by HTML and CSS. These act like the building blocks and
                  styling tools that create our visible appearance. Just like
                  clicking a button, the actions we see externally, like
                  clapping, are the front-end in action. But behind the scenes,
                  the backend keeps things running. Just as our muscles and
                  internal organs power our movements, the backend uses
                  languages like JavaScript to handle complex processes. The
                  backend is essentially the internal machinery, like the
                  breathing system, that makes everything function. Both
                  front-end and back-end work together to create a complete and
                  functioning system.
                </p>
              </div>
            </a>
          </div>
          <div className='blogs'>
            <a href='#'>
              <div className='img'>
                <img src='images/post-two.jpg' alt='blog-two' />
                <div className='blog-date'>10 may</div>
              </div>
              <div className='blog-text'>
                <h3>The Key to Productivity: It's Not What You Think</h3>
                <p>
                  In today's fast-paced world, everyone wants to be productive.
                  We're bombarded with tips and tricks promising to turn us into
                  achievement machines. But the truth is, there's no
                  one-size-fits-all solution. The key to productivity is
                  actually a combination of factors, tailored to your unique
                  personality and work style.
                </p>
              </div>
            </a>
          </div>
   
          <div className='blogs'>
            <a href='#'>
              <div className='img'>
                <img src='images/post-four.jpg' alt='blog-four' />
                <div className='blog-date'>20 jul</div>
              </div>
              <div className='blog-text'>
                <h3>Web Development</h3>
                <p>
                  Web development is the process of creating websites and web
                  applications. It encompasses a wide range of activities, from
                  designing the user interface (UI) and user experience (UX) to
                  writing the code that makes the website function.
                </p>
              </div>
            </a>
          </div>
          <div className='blogs'>
            <a href='#'>
              <div className='img'>
                <img src='images/post-five.jpg' alt='blog-five' />
                <div className='blog-date'>10 may</div>
              </div>
              <div className='blog-text'>
                <h3>Work From Home</h3>
                <p>
                  Work from home refers to work arrangements where employees
                  perform their duties remotely, outside of a traditional office
                  setting. This can be done from a dedicated home office, a
                  co-working space, or even a coffee shop – as long as a stable
                  internet connection is available.
                </p>
              </div>
            </a>
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
      {/*blog end*/}
    </>
  );
};

export default page;
