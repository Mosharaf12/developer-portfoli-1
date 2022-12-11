import React from 'react';
import CustomTitle from '../../../components/CustomTitle';

const Blog = () => {
    return (
        <div className='py-20' id='blog'>
            <CustomTitle>Coming soon.................</CustomTitle>
            <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col items-center p-4 mx-auto md:p-8">
		<h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">Blog coming soon..</h1>
		<div className="relative mt-6 mb-12">
			
			
		</div>
		<div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
			<div className="flex flex-col w-full divide-y divide-gray-300">
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Billing</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Support</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Account</a>
			</div>
			<div className="flex flex-col w-full divide-y divide-gray-300">
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Features</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Contact us</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">My orders</a>
			</div>
			<div className="hidden w-full divide-y sm:flex-col sm:flex divide-gray-300">
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Enterprise</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Privacy</a>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Developers</a>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;