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
import { useQuery } from '@tanstack/react-query';

const Project = () => {

    const {data: projects = [], refetch} = useQuery({
        queryKey:['projects'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/projects`)
            const data = await res.json();
            return data;
        }
        
    })
    refetch();


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