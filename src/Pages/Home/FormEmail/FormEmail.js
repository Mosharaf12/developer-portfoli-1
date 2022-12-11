import React from 'react';
import CustomTitle from '../../../components/CustomTitle';

const FormEmail = () => {
    return (
      <div className='py-20' id = 'contact'>
        <CustomTitle>CONTACT ME</CustomTitle>
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                <div className="text-gray-600 text-xl">You Want to talk ! <br /> Contact Me !</div>
            </div>
            <img src="https://assets.website-files.com/5d5d5904f8a21bfe5ff69367/601490af893a7fbcadb82d51_swinging.svg" alt="" className="p-6" />
        </div>
        <form novalidate="" action="https://formsubmit.co/f7c5d70aea35c4053e9a4b58ace96e15" method="POST" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
                <label for="name" className="text-sm">Full name</label>
                <input id="name" type="text" nema='name' placeholder="" className="w-full p-3 rounded border-2" />
            </div>
            <div>
                <label for="email" className="text-sm">Email</label>
                <input id="email" type="email" name='email' className="w-full p-3 rounded border-2" />
            </div>
            <div>
                <label for="subject" className="text-sm">Subject</label>
                <input id="subject" type="text" name='subject' className="w-full p-3 rounded border-2" />
            </div>
            <div>
                <label for="message" className="text-sm">Message</label>
                <textarea id="message" name='message' rows="3" className="w-full p-3 rounded border-2"></textarea>
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-info text-gray-50">Send Message</button>
        </form>
    </div>
      </div>
    );
};

export default FormEmail;