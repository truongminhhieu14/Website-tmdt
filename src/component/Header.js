import React from 'react';
import Logo from './Logo';
import { IoMdSearch  } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";


const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className='w-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Logo  w={100} h={60} />
        </div>
        <div className='flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
            <input type = 'text' placeholder='search product here...' className='w-full outline-none'/>
            <div className='text-lg flex items-center justify-center rounded-r-full   '>
              <IoMdSearch />
            </div>
        </div>
        <div className='flex items-center gap-4'>
        <div className='text-2xl cursor-pointer'>
            <FaRegCircleUser />
        </div>

        <div className='text-3xl'>
           <span> 
            <IoCartOutline/>
           </span>
        </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
