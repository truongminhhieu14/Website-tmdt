import loginIcons from '../assets/signin.jpg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
    const [showPassword, setshowPassword] = useState(false)

    return (
        <section id='login'>
            <div className='mx-auto container px-4'>

                <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons' />
                    </div>

                    <form className='pt-5'>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100'>
                                <input type='email' placeholder='enter email' className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 flex'>
                                <input type={showPassword ? "text" : "password"} placeholder='enter password' className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onclick={() => setshowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-green-500' >
                                Forgot password
                            </Link>
                        </div>

                        <button className='bg-lime-300 text-black px-6 py-1 e-full max-w-[150px rounded-full hover: scale-110 transition-all mx-auto block mt-4]'>Login</button>

                    </form>

                </div>


            </div>
        </section>
    )
}

export default Login