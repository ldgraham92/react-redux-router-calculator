import React from 'react';
import '../css/Nav.css';

import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav id='navDiv'>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/calculator'>
                        Calculator
                    </Link>
                </li>
                <li>
                    <Link to='/history'>
                        Calculation History
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;