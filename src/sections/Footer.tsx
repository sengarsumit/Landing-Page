import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';
import SocialPin from '@/assets/social-pin.svg';
import logo from '../assets/logosaas.png';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-centre'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur  before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
        <Image src={logo} alt="logo"  height={40}  className='relative'/>
        </div>
        <nav className='flex flex-col md:flex-row justify-center gap-6 mt-6'>
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Customers</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
        <SocialX/>
        <SocialInsta/>
        <SocialLinkedIn/>
        <SocialYoutube/>
        <SocialPin/>
        </div>
        <p className='mt-6'>&copy; 2024 your Company, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};
