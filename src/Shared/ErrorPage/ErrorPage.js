import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 bg-#8f8f8f38 text-gray-800 h-[100vh]">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="flex items-center flex-col text-center text-white">
                    <img className='w-full' src='https://api.time.com/wp-content/uploads/2014/10/hot-dot.png' alt="" srcset="" />
               
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to='/' className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Back to homepage</Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;