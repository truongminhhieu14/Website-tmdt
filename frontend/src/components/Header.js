import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const user = useSelector(state => state?.user?.user)
    console.log("user header", user)

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={"/"}>
                    <Logo w={90} h={50}/>
                </Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='Tìm sản phẩm ở đây' className='w-full outline-none'/>
                <div className='text-lg min-w-[50px] h-8 bg-black flex items-center justify-center rounded-r-full text-white'>
                    <GrSearch />
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <div className='text-3xl cursor-pointer relative flex justify-center'>
                {
                          user?.profilePic ? (
                            <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                          ) : (
                            <FaRegUserCircle/>
                          )
                        }
                </div>

                <div className='text-2xl relative'>
                    <span><FaShoppingCart/></span>
                    <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <p className='text-sm'>0</p>
                    </div>
                </div>

                <div>
                <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-slate-950 hover:bg-slate-700'>Login</Link>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header