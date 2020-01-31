import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Sample()
{
    return (
        <nav>
            <h3>Logo</h3>
            <ul classname= 'nav-links'>
            <Link to =''>
            <li>About</li>
            </Link>
            <Link to =''>
            <li>Stories</li>
            </Link>
            </ul>
        </nav>
    )
}
export default Sample;