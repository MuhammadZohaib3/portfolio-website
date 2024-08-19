import React from 'react';
import './index.css';
import portfolio1 from '../../assets/portfolio1.jpeg';
import portfolio2 from '../../assets/portfolio2.jpeg';
import portfolio3 from '../../assets/portfolio3.jpeg';
import portfolio4 from '../../assets/portfolio4.png';
import portfolio5 from '../../assets/portfolio5.jpeg';
import portfolio6 from '../../assets/portfolio6.jpeg';
function Work() {
  return (
   <section id='work'>
    <h2 className="works">My Portfolio</h2>
    <span className="desc">I take pride in paying attention to the smallest details and making sure that my work is pixels perfect.I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
   <div className='workImgs'>
   <img className='porfolioImg' src={portfolio1} alt="logo" />
   <img className='porfolioImg' src={portfolio2} alt="logo" />
   <img className='porfolioImg' src={portfolio3} alt="logo" />
   <img className='porfolioImg' src={portfolio4} alt="logo" />
   <img className='porfolioImg' src={portfolio5} alt="logo" />
   <img className='porfolioImg' src={portfolio6} alt="logo" />
   </div>
   <button className="btn">see more</button>
   </section>

  )
}

export default Work;