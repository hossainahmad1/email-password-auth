import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div> 
            <nav>
                <Link to='/login'>Log in</Link>
                <Link to='/register'>Register</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;