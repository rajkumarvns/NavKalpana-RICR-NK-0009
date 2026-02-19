import React from 'react';
import VideoWithParticles from './VideoWithParticles';

const DNavbar = () => {
    return (
        <>
            <VideoWithParticles
                src="https://www.youtube.com/embed/7kgOQorCb0g?si=ZaJE2fNzIXC_auM5"
                title="Video 1"
            />
            <VideoWithParticles
                src="https://www.youtube.com/embed/8ClYBtfhkaw?si=LbTBjFQUcJ2dmup4"
                title="Video 2"
            />
            <VideoWithParticles
                src="https://www.youtube.com/embed/8ClYBtfhkaw?si=LbTBjFQUcJ2dmup4"
                title="Video 3"
            />
        </>
    );
};

export default DNavbar;
