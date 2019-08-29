import React from 'react';
import { Link } from '@reach/router';
import coding from '../pictures/coding.jpg'
import cooking from '../pictures/cooking.jpeg'
import football from '../pictures/football.jpg'

const Home = () => {
    return (
        <div >
            <h1>TOPICS</h1>
            <p> Coding:</p>
            <Link to='/articles/topic/coding'><img src={coding} alt={'coding'} /></Link>
            <p> Cooking:</p>
            <Link to='/articles/topic/cooking'><img src={cooking} alt={'cooking'} /></Link>
            <p> Football:</p>
            <Link to='/articles/topic/football'><img src={football} alt={'football'} /></Link>
        </div>
    );
};

export default Home;