import React from 'react';
import img4 from '../../../Assets/tools/react.png'
import img5 from '../../../Assets/tools/mongodb.png'
import img6 from '../../../Assets/tools/firebase.png'
import img7 from '../../../Assets/tools/bootstrap1.png'
import img8 from '../../../Assets/tools/tailwind.png'
import img13 from '../../../Assets/tools/vercel.png'
// projects images 
import proj1 from '../../../Assets/projects/laptop market.png'
import proj2 from '../../../Assets/projects/turist guide.png'
import proj3 from '../../../Assets/projects/dream learn.png'
import CustomTitle from '../../../components/CustomTitle';
import ProjectsCard from './ProjectsCard';

const Project = () => {
    const projects = [
        {
            id: 1,
            title: 'Laptop Market',
            image: proj1,
            tools: [
                {img: img4, title: 'React JS'},
                {img: img5, title: 'MongoDb'},
                {img: img6, title: 'Firebase'},
                {img: img8, title: 'Tailwind'},
                {img: img13, title: 'Vercel'},
            ],
            demolink: 'https://laptop-resale-market-6f17c.web.app/',
            codelink: 'https://github.com/Mosharaf12/laptop-resale-client-12'
        },
        {
            id: 2,
            title: 'Tourist Guide',
            image: proj2,
            tools: [
                {img: img4, title: 'React JS'},
                {img: img5, title: 'MongoDb'},
                {img: img6, title: 'Firebase'},
                {img: img8, title: 'Tailwind'},
                {img: img13, title: 'Vercel'},
            ],
            demolink: 'https://tourist-guide-client-8307d.web.app/',
            codelink: 'https://github.com/Mosharaf12/tourist-guide-client-11'
        },
        {
            id: 3,
            title: 'Dream learn',
            image: proj3,
            tools: [
                {img: img4, title: 'React JS'},
                {img: img6, title: 'Firebase'},
                {img: img8, title: 'Tailwind'},
                {img: img13, title: 'Vercel'},
            ],
            demolink: 'https://online-education-client.web.app/',
            codelink: 'https://github.com/Mosharaf12/dream-learn-client-10'
        }
    ]
    return (
        <div className='px-5 py-20' id='projects'>
        <CustomTitle>PROJECTS</CustomTitle>
        <p className='text-center mb-10 text-base-100'>Having excellent problem-solving skills, confidence to achieve, and a can-do attitude toward any challenge are important software developer competencies, which make that developer a valued resource in any organization.
        Good developers often have excellent technical skills and write clean, neat code. Their code is frequently well commented and can be easily understood by other team members, allowing it to be easily debugged. Good developers also show an awareness of their limitations and the technologies they haven't yet mastered.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                projects.map(project => <ProjectsCard
                    key={project.id}
                    project={project}
                ></ProjectsCard>)
            }
        </div>
    </div>
    );
};

export default Project;