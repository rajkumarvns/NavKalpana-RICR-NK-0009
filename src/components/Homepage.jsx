// src/components/Homepage.jsx
import React from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <>

    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="https://res.cloudinary.com/dzrjxgpav/video/upload/v1752668051/home1_-_Made_with_Clipchamp_hg7b5n.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>Welcome to, </h1> 
        <p id='home'> House Of Machine / Engneering</p>
        <p>Your gateway to innovation: Dragonfly, Neuralinks, and more.</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </section>



<section className="poda-card">
  <div className="poda-card-content">
    <div className="poda-image">
      <img src="./six-axis-robot.jpg" />
    </div>
    <div className="poda-info">
      <h2>Poda</h2>
      <p>Poda is a high-precision, industrial-grade 6-axis robotic arm engineered for automation and heavy-duty tasks.
It offers exceptional flexibility, repeatability, and torque handling across complex manufacturing operations.
Designed for reliability and speed, Poda streamlines production while reducing human error and fatigue.</p>


<div className='lmore-btn'>
    <button>Learn more</button>
  </div>
    </div>


  </div>
</section>

<section className='supercards'>
<div className="cards">
  <div className="card-content">
    <div className="card-image">
      <img src="./udog.png" />
    </div>
    <div className="card-info">
      <h2>Unitree Go2</h2>
      <p>In the spirit of technical innovation and industrial leadership, Unitree is coming back ! With standard 4D Ultra-wide LIDAR and big model GPT empowerment, a new creature of embodied AI—Unitree Go2 joins you to explore the future world!</p>


<div className='card-lmore-btn'>
    <button>Learn more</button>
  </div>
    </div>
  </div>


  <div className="card-content">
    <div className="card-image">
      <img src="./uhum.jpg" />
    </div>
    <div className="card-info">
      <h2>Unitree G1</h2>
      <p>Unlock unlimited sports potential (Extra large joint movement space angle, 23~43 joints) .Force control of dexterous hands, manipulation of all thingsImitation & reinforcement learning driven. Robot world model, let’s create it together.</p>


<div className='card-lmore-btn'>
    <button>Learn more</button>
  </div>
    </div>
  </div>


</div>

<div className="cards">
  <div className="card-content">
    <div className="card-image">
      <img src="./ufacenill.webp" />
    </div>
    <div className="card-info">
      <h2>Unitree B2</h2>
      <p>Industrial Level Heavy Loader, Great application potential in agriculture, industry, specific security patrols, surveys and exploration.170% increase in joint performance with 360 N.m of torque, 100% increase in continuous walking with load greater than 40kg, Go Beyond the Limits, Lead The Industry Application.</p>


<div className='card-lmore-btn'>
    <button>Learn more</button>
  </div>
    </div>
  </div>


  <div className="card-content">
    <div className="card-image">
      <img src="./ufox.webp" />
    </div>
    <div className="card-info">
      <h2>Unitree H1</h2>
      <p>Unitree's first universal humanoid robot, Highest power performance in the world's approximate specificationsThe advanced powertrain provides the highest level of speed, power, maneuverability and flexibility.</p>


<div className='card-lmore-btn'>
    <button>Learn more</button>
  </div>
    </div>
  </div>

</div>

</section>

</>
  );
};

export default Homepage;
