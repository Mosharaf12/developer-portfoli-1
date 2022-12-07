import React from 'react';
import About from './About/About';
import ProfileBio from './ProfileBio/ProfileBio';

const Home = () => {
    return (
        <div>
           <ProfileBio></ProfileBio>
           <About></About>
        </div>
    );
};

export default Home;