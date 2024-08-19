import React from 'react'
import './index.css';
import { Link } from 'react-scroll'
import bg from '../../assets/boy-png-29779.png';
import { AiFillShopping } from "react-icons/ai";
function Intro() {
  return (
    <section className='intro'>
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className="introText">I'm
            <span className='introName'> Syed Zohaib</span><br />Website Designer
            </span>
        <p className="introPara">I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites. </p>
        <Link><button className='btn'><AiFillShopping  className='desktopMenuImg' />Hire me</button></Link>
        </div>
       <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro