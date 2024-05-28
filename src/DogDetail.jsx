import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DogDetail.css';

function DogDetail() {
    const { name } = useParams();
    const image_url = `../public/${name}.jpg`
    return (
        <div>
            <img src={image_url}></img>
            <Link to="/dogs"><button>go home</button></Link>
        </div>
    )
}

export default DogDetail;