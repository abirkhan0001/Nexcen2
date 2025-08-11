import Logo from '../../assets/png/LogoFooter.png'
import { FaInstagram } from "react-icons/fa";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { FaTwitterSquare } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const FooterMain = () => {
  return (
    <div className='bg-[#263238] py-8'>
      <div className='max-w-[1200px] mx-auto px-4 flex flex-col items-center sm:items-start sm:flex-row justify-center sm:justify-between gap-10 md:gap-4'>

        <div className='flex flex-col items-center sm:items-start sm:w-1/4'>
          <img src={Logo} alt="Footer Logo" className="mb-4" />

          <p className='text-[#F5F7FA] text-[14px] text-center sm:text-left'>
            Copyright © 2020 Landify UI Kit.<br />
            <span className='block text-left'>All rights reserved</span>
          </p>

          <div className='flex gap-4 mt-4'>
            <FaInstagram size={30} color="white" />
            <TiSocialDribbbleCircular size={30} color="white" />
            <FaTwitterSquare size={30} color="white" />
            <CiYoutube size={30} color="white" />
          </div>
        </div>

        <div className='sm:w-1/6'>
          <h1 className='text-white pb-3 font-semibold'>Company</h1>
          <ul>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>About Us</li>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Blog</li>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Contact Us</li>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Pricing</li>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Testimonials</li>
          </ul>
        </div>

        <div className='sm:w-1/6'>
          <h1 className='text-white pb-3 font-semibold'>Support</h1>
          <ul>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Help Center</li>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Terms of Service</li>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Legal</li>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Privacy Policy</li>
            <li className='text-[#F5F7FA] text-[11px] py-1 cursor-pointer font-bold hover:text-[#4CAF4F]'>Status</li>
          </ul>
        </div>

        <div className='sm:w-1/4 flex flex-col'>
          <h1 className='pb-3 text-white font-semibold'>Stay Up To Date</h1>
          <input
            type="email"
            placeholder="Your Email Address"
            className="bg-[#808080] text-white border border-gray-500 rounded px-4 py-2 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
          />
        </div>

      </div>
    </div>
  )
}

export default FooterMain
