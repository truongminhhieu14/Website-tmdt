import React from 'react';
import Logo from './Logo';
import { IoMdSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className='w-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link>
             <Logo w={100} h={60} />
          </Link>
        </div>
        <div className='flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here...' className='w-full outline-none' />
          <div className='text-lg flex items-center justify-center rounded-r-full   '>
            <IoMdSearch />
          </div>
        </div>



        <div className='flex items-center gap-7'>
          <div className='text-2xl cursor-pointer'>
            <FaRegCircleUser />
          </div>

          <div className='text-3xl relative'>
            <span> <IoCartOutline />
            </span>

            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>
        </div>

        <div>
          <Link className='px-3 py-1 rounded-full text-black bg-lime-300 hover:bg-lime-600'>Login</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
