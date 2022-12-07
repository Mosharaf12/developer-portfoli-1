import React from 'react';

const CustomTitle = ({children}) => {
    return (
        <div>
            <h3 className='text-4xl text-white font-semibold py-8 text-center'>{children}</h3>
        </div>
    );
};

export default CustomTitle;