import React from 'react';
 
const Navbar = () => {
	let items = ['Home', 'Authors', 'Contact'];


  return (
     <ul className="navbar">
        {items.map(item => <li className="navbar-item">{item}</li>)}
     </ul>
  );
}
 
export default Navbar;