import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  
  const menuItems = <>
  <li> <Link to='/'>HOME</Link> </li>
  <li> <Link to='/about'>ABOUT</Link> </li>
  <li> <Link to='/skills'>SKILLS</Link> </li>
  <li> <Link to='/projects'>PROJECTS</Link> </li>
  <li> <Link to='/blog'>BLOG</Link> </li>
  <li> <Link to='/contact'>CONTACT ME</Link> </li>
  </>
    return (
      <div className="navbar z-10 fixed mx-auto md:max-w-[1240px]" style={{
        backgroundColor: '#8f8f8f38',
        backdropFilter: 'blur(8px)'
    }} >
  
  <div className=" navbar-start " id='homepage'>
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-white text-xl">MOSHARAF</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white">
     {menuItems}
    </ul>
  </div>
 
</div>
   
    );
};

export default Header;