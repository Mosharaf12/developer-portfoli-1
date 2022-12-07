import React from 'react';

const CustomTitle = ({children}) => {
    return (
        <div>
            <h3 className='text-3xl text-white font-semibold py-8'>{children}</h3>
        </div>
    );
};

export default CustomTitle;