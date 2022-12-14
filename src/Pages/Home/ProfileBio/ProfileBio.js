import React from "react";
import img1 from '../../../Assets/images/DSC_0127 copy.JPG'
import { FaFacebook,FaGithub,FaLinkedin,FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import resume from '../../../Assets/My resume1.pdf'
import { FaFileDownload} from "react-icons/fa";
import './ProfileBio.css'
const ProfileBio = () => {
  return (
    <div className="md:flex py-20">
      <div className="px-20">
        <div className="avatar">
          <div className="imganim animate-pulse ease-in-out w-full md:w-96 rounded-full">
            <img className="" src={img1} alt='' />
          </div>
        </div>
      </div>
      <div className="flex-1 text-white px-5 md:px-0">
        <h2 className="text-5xl uppercase font-bold"> <span>Hi !<br /> I am <span className="text-info">Mosharaf Hossain </span></span> <br /><span className="text-4xl">web developer</span></h2>
        <p className="my-5 text-lg">
        Hello , I am Mosharaf I’m a mern stack web developer. I spend my whole day, practically every day,<br />experimenting with HTML, CSS, JavaScript And React js. I’m curious, and I enjoy work !
        </p>
        {/* <button className="btn btn-outline btn-info mr-5">MORE ABOUT ME</button> */}
        <a href={resume} download={resume}>
                <button className='btn btn-info btn-outline mt-5 mr-6 rounded-md w-full md:w-52 uppercase'><FaFileDownload className="mr-2 text-xl"></FaFileDownload> Download Resume</button>
                </a>
                <a target='blank' href="https://github.com/Mosharaf12"><button className='btn btn-warning btn-outline mt-5 rounded-md w-full md:w-52 uppercase'><FaGithub className="mr-2 text-xl"></FaGithub>Github Link</button></a>
        <div className="flex py-5 text-3xl">
        <a target='blank' href="https://github.com/Mosharaf12"> <FaGithub className="mr-5"></FaGithub> </a>
        <a target='blank' href="https://www.facebook.com/farabi.ahmed.16940599/"> <FaFacebook className="mr-5"></FaFacebook> </a>
        <a target='blank' href="https://www.linkedin.com/in/md-mosharaf-hossain-065407183/"> <FaLinkedin className="mr-5"></FaLinkedin> </a>
        <a target='blank' href="tel:+8801829444636"> <FaPhoneAlt className="mr-5"></FaPhoneAlt> </a>
        <a target='blank' href="mailto:mosharafctg111@gmail.com"> <AiTwotoneMail className="mr-5"></AiTwotoneMail> </a>

      </div>
      </div>
     
    </div>
  );
};

export default ProfileBio;
