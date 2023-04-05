import React from 'react';




import { MdOutlineNotes} from "react-icons/md"
const Header = ({ handleToggleDarkMode }) => {
	return (
		
		<div className='header'>
		<	MdOutlineNotes style={{color:"white",fontSize:"3rem"}} >
		</MdOutlineNotes>
			<h1 >Notes</h1>
		
		</div>
	);
};

export default Header;
