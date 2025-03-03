'use client';

import { useEffect, useState } from 'react';

const Particle = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    setToggle(true);
  }, []);
  return (
    <>
      <style jsx>
        {`
          canvas {
            display: block;
            vertical-align: bottom;
          }
          #particles-js {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #000000;
            background-image: url('');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 50%;
          }
        `}
      </style>
      <div id='particles-js' style={{ backgroundColor: '#00000000' }}></div>
      <script src='https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></script>
      <script src='https://threejs.org/examples/js/libs/stats.min.js'></script>
      {toggle && <script async src='/particle-file/index.js'></script>}
    </>
  );
};
export default Particle;
