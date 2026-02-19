import React from 'react';
import ParticlesBackground from './VideoWithParticles';

const ParticleController = () => {
  return (
    <>
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '40px' }}>
        <h1>🎇 Flying Dots Background</h1>
        <p>Move your mouse around and enjoy the subtle animation!</p>
      </div>
    </>
  );
};

export default ParticleController;
