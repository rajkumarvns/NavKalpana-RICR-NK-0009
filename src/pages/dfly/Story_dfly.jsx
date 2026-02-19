import React, { useEffect, useRef } from 'react';
import '../../styles/dfly/Story_dfly.css';

const Story_d = () => {
    const backgroundsRef = useRef([]);

    // Flying dots generator function
    const generateDots = (container) => {
        for (let i = 0; i < 50; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';

            const size = Math.random() * 4 + 2;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.left = `${Math.random() * 100}%`;
            dot.style.top = `${Math.random() * 100}%`;

            const shade = Math.floor(Math.random() * 55) + 200;
            dot.style.backgroundColor = `rgba(${shade}, ${shade}, ${shade}, 0.8)`;

            const duration = Math.random() * 5 + 3;
            dot.style.animationDuration = `${duration}s`;

            container.appendChild(dot);
        }
    };

    useEffect(() => {
        // Loop through refs and generate dots for each
        backgroundsRef.current.forEach(bg => {
            if (bg) {
                bg.innerHTML = ''; // Clear old dots
                generateDots(bg);
            }
        });
    }, []);

    const videoURLs = [
        "https://www.youtube.com/embed/7kgOQorCb0g?si=ZaJE2fNzIXC_auM5",
        "https://www.youtube.com/embed/8ClYBtfhkaw?si=LbTBjFQUcJ2dmup4",
        "https://www.youtube.com/embed/8ClYBtfhkaw?si=LbTBjFQUcJ2dmup4"
    ];

    return (
        <>
            {videoURLs.map((url, index) => (
                <div className="video" key={index}>
                    <div
                        className="dots-background"
                        ref={(el) => backgroundsRef.current[index] = el}
                    ></div>
                    <iframe
                        src={url}
                        title={`YouTube video ${index}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            ))}
        </>
    );
};

export default Story_d;
