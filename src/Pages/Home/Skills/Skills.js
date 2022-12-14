import React from 'react';
import img1 from '../../../Assets/tools/html.png'
import img2 from '../../../Assets/tools/css.png'
import img3 from '../../../Assets/tools/javascript.png'
import img4 from '../../../Assets/tools/react.png'
import img5 from '../../../Assets/tools/mongodb.png'
import img6 from '../../../Assets/tools/firebase.png'
import img7 from '../../../Assets/tools/bootstrap1.png'
import img8 from '../../../Assets/tools/tailwind.png'
import img9 from '../../../Assets/tools/material ui.png'
import img10 from '../../../Assets/tools/nodejs.webp'
import img11 from '../../../Assets/tools/express.png'
import img12 from '../../../Assets/tools/git.png'
import img13 from '../../../Assets/tools/vercel.png'
import SkillCard from './SkillCard';
import CustomTitle from '../../../components/CustomTitle';
import { Fade } from 'react-reveal';


const Skills = () => {
    const myskills = [
        {id: '1', img: img1, title: "Html"},
        {id: '2', img: img2, title: "CSS"},
        {id: '3', img: img3, title: "Javascript"},
        {id: '4', img: img4, title: "React JS"},
        {id: '5', img: img5, title: "MongoDb"},
        {id: '6', img: img6, title: "Firebase"},
        {id: '7', img: img7, title: "Bootstrap"},
        {id: '8', img: img8, title: "Tailwind"},
        {id: '9', img: img9, title: "Material UI"},
        {id: '10', img: img10, title: "Node JS"},
        {id: '11', img: img11, title: "Express JS"},
        {id: '12', img: img12, title: "Git"},
        {id: '13', img: img13, title: "Vercel"}
    ]

    return (
        <Fade bottom> 
        <div className='md:px-20 px-5 py-16' id='skills'>
            <CustomTitle>MY SKILLS</CustomTitle>
            <p className='text-2xl font-semibold text-white py-5'>Languages, framework and tools:</p>
            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-10 gap-5'>
            {
                myskills.map(skill => <SkillCard 
                    key={skill.id}
                    skill={skill}
                ></SkillCard>)
            }
            </div>
        </div>

        </Fade>
    );
};

export default Skills;