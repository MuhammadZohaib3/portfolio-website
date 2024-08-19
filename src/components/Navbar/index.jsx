import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/letter-w_12578221.png';
import { BiComment } from "react-icons/bi";
import { Link } from 'react-scroll'
import { MenuOutlined } from "@ant-design/icons"
function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className='navbar'>
    <img src={logo} alt="logo" className='logo' />
    <div className='desktopMenu'>
  <Link className='desktopMenuListItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
  <Link className='desktopMenuListItem' activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
  <Link className='desktopMenuListItem' activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
  <Link className='desktopMenuListItem' activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500}>Clients</Link>
    </div>
    <button className='desktopMenuBtn'onClick={() => {
      document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>
       <BiComment className='desktopMenuImg' /> Contact Me
    </button>
    
    <MenuOutlined className='mobImg' onClick={() => setMenu(!menu)}/>
    <div className="mobMenu" style={{display: menu? 'flex': 'none'}}>
      <Link className='listItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  onClick={() => setMenu(false)}>Home</Link>
      <Link className='listItem' activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  onClick={() => setMenu(false)}>About</Link>
      <Link className='listItem' activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500}    onClick={() => setMenu(false)}>Portfolio</Link>
      <Link className='listItem' activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500}  onClick={() => setMenu(false)}>Clients</Link>
      <Link className='listItem' activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenu(false)}>Contact</Link>
    </div>

    
    </nav>
  )
}

export default Navbar;