import React from 'react';
import { FaAngleDoubleRight, FaCode, FaLaptop } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectsDetails = () => {
    const project = useLoaderData();
    const {image,id, _id, details, title,tools,codelink,demolink} = project;

    const allDetails = details.split('.');

    return (
    <div className='py-20 mb-32'>
          <div className="hero bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} alt={title} className="md:w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className='text-2xl font-semibold text-blue-500 mt-3'>Projects No: {id}</p>
      <p className="py-6">
       <ul>
       {
            allDetails.map((detail, idx) => <li
            key={idx}
            className='flex items-start mb-2'
            >
            <FaAngleDoubleRight className='mr-2'></FaAngleDoubleRight> {detail}
            </li> )
        }
       </ul>
      </p>
        <h3 className='text-2xl font-bold text-blue-500 m-2'>Tools & Function: </h3>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-x-2 gap-y-2'>
                    {
                        tools.map((tool, i) => <div className='cursor-pointer hover:bg-sky-100 flex items-center px-2 py-1 rounded-md bg-sky-50 text-white' key={i}>
                            <img className='w-5 h-5 mr-2' src={tool.img} alt={tool.title} />
                            <p className='text-sky-500 font-semibold '>{tool.title}</p>
                        </div>)
                    }
                </div>

      <div className='md:flex grid grid-cols-2 md:grid-cols-3 gap-2 mt-6'>
                    <a target="blank" href={codelink}><button className='w-full hover:bg-sky-600 px-4 py-2 bg-sky-500 text-semibold text-white rounded-md flex items-center'>CODE <FaCode className='ml-2'></FaCode></button></a>

                    <a target="blank" href={demolink}>
                    <button className='w-full hover:bg-sky-600 px-4 py-2 bg-green-500 text-semibold text-white rounded-md flex items-center'>LIVE DEMO <FaLaptop className='ml-2'></FaLaptop></button>
                    </a>
                    <Link to='/'><button className='w-full hover:bg-sky-600 px-4 py-2 bg-green-500 text-semibold text-white rounded-md flex items-center'>Home</button></Link>
                </div>
      
    </div>
  </div>
</div>

    </div>
    );
};

export default ProjectsDetails;