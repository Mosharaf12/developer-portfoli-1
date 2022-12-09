import React from 'react';

const SkillCard = ({skill}) => {
    const {img, title} = skill;
    return (
        <div className='pl-4 pr-10 py-4 bg-[#8f8f8f38] rounded-xl shadow-lg text-center flex items-center justify-start'>
        <div>
            <img className='rounded-xl px-5 w-24' src={img} alt={title} />
        </div>
        <div className='mt-3'>
            <h2 className='text-xl text-white'>{title}</h2>
        </div>
    </div>
    );
};

export default SkillCard;