import React from 'react';
import { Link } from 'react-router-dom';
import './DogsList.css';

function DogsList() {
    return (
        <div>
            <h1>Dogs</h1>
            <Link to="/dogs/duke"><img src="../public/duke.jpg"></img></Link>
            <Link to="/dogs/perry"><img src="../public/perry.jpg"></img></Link>
            <Link to="/dogs/whiskey"><img src="../public/whiskey.jpg"></img></Link>
        </div>
    )
}

export default DogsList;