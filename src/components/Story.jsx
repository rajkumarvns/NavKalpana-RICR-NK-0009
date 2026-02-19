import React from 'react'
import '../styles/EmbadedVid.css';
import '../styles/Readme_Blog.css';


const Story = () => {
    return(
        <>
        <div className='vid'>
            <iframe width="1323" height="744" src="https://www.youtube.com/embed/8ClYBtfhkaw?si=LbTBjFQUcJ2dmup4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>


        <div className='readme'>
            <div className='block_1'>
                <div className='content'>
                    <div className='image'>
                        <img src="../../public/r1.webp" alt="" />
                    </div>
                    <div className='info'>
                        <h1>Our Story</h1>
                        <h4>
                        Unitree Robotics is a world-renowned robotics company focusing on independent research and development, production and sales of consumer-grade and industry-grade high-performance quadruped robots and dexterous robotic arms. We are the first company in the world to openly retail high-performance quadruped robots, and its sales have been leading in the world over the years.
                        </h4>
                        <div className='lmore-btn-0'>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='block_2'>
                <div className='content'>
                    <div className='info'>
                        <h1 className='h'>Untree PUMP MAX</h1>
                        <h4>
                        UNITREE SPORT is the first portable fitness equipment with a built-in motor that cleverly controls resistance from start to finish, for a consistent pump that works your muscles evenly on every lift and pull. Designed by award-winning robotics engineers and fitness experts, PUMP anchors to any doorway, chair, and even your ankle to pack 1000’s of intense workouts into one tiny kit — giving you the power of a rowing machine, squat rack, dumbbells and cables anywhere.
                        </h4>
                        <div className='lmore-btn-1'>
                            <button>Read More</button>
                        </div>
                    </div>

                    <div className='image'>
                        <img src="../../public/r1.webp" alt="" />
                    </div>
                </div>
            </div>

           
        </div>
        
        </>
    );
}

export default Story;