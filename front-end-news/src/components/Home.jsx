import React from 'react';
import { Link } from '@reach/router';
import coding from '../pictures/coding.jpg'
import cooking from '../pictures/cooking.jpg'
import football from '../pictures/football.jpg'

const Home = () => {
    return (
        <div className="topics">
            <h1>TOPICS</h1>
            <p> Coding:</p>
            <Link to='/articles/topic/coding'><img src={coding} alt={'coding'} className="topicImg" /></Link>
            <p> Cooking:</p>
            <Link to='/articles/topic/cooking'><img src={cooking} alt={'cooking'} className="topicImg" /></Link>
            <p> Football:</p>
            <Link to='/articles/topic/football'><img src={football} alt={'football'} className="topicImg" /></Link>
        </div>
    );
};

export default Home;