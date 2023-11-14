import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='py-8 bg-green-400'>
           <Link className='px-8 py-2 bg-orange-300 outline-none border-none rounded-md hover:bg-gray-300' to="/">Home</Link>
           <Link className='px-8 py-2 bg-orange-300 outline-none border-none rounded-md hover:bg-gray-300' to="/login">Login</Link>
           
        </div>
    );
};

export default Header;