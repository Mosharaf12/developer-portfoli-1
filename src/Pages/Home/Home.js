import React from 'react';
import About from './About/About';
import Blog from './Blog/Blog';
import FormEmail from './FormEmail/FormEmail';
import ProfileBio from './ProfileBio/ProfileBio';
import Project from './Project/Project';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
           <ProfileBio></ProfileBio>
           <About></About>
           <Skills></Skills>
           <Project></Project>
           <FormEmail></FormEmail>
           <Blog></Blog>
        </div>
    );
};

export default Home;