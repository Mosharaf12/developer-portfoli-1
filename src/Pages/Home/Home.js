import React from 'react';
import About from './About/About';
import ProfileBio from './ProfileBio/ProfileBio';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
           <ProfileBio></ProfileBio>
           <About></About>
           <Skills></Skills>
        </div>
    );
};

export default Home;