import React from 'react';
import './index.css';
import bg from '../../assets/image.png';
import icon from '../../assets/icon-image.png';
import appIcon from '../../assets/app-image.png';
function Skills() {
  return (
    <section id='skills'>
        
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JAVASCRIPT, as well as design software such as Adobe Photoshop and illustrator. </span>
        <div className='skillBar'>
            <div className='skillBox'>
                <img className='skillBarImg' src={bg} alt='logo' />
                <div>
                    <h2>UI/UX design</h2>
                    <p className='skillBarText'>This is a demon text,you can write your own content here. </p>
                </div>
            </div>
            <div  className='skillBox'>
                <img className='skillBarImg' src={icon} alt='logo'  />
                <div>
                    <h2>Website design</h2>
                    <p className='skillBarText'>This demo text can be changed while making the production ready site.</p>
                    </div>
                   </div>
                 <div  className='skillBox'>
                <img className='skillBarImg' src={appIcon} alt='logo'/>
                <div> 
                    <h2>App design</h2>
                    <p className='skillBarText'>This demo text can be changed while making the production ready site.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;