import React from 'react'
import Image from '../images/img-2.jpg'
import {FcGoogle } from 'react-icons/fc'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

        <div className='hidden sm:block  bg-zinc-900/70'>
            <img src={Image} alt="" className='w-full h-full object-cover mix-blend-overlay' />
        </div>
        <div className='bg-white flex flex-col justify-center'>
        
            <form className='max-w-[400px] w-full mx-auto p-4'>
            <h2 className='text-center  text-md mb-6 relative flex justify-center items-center font-semi-bold '> Sign up with  <span className='border mx-2 p-2 rounded-full ring-inset cursor-pointer hover:bg-zinc-700'> <FcGoogle  className='text-2xl  '/> </span>    </h2>


                <div>
                    <div className='flex flex-col py-2'> 
                    <input type='text' placeholder='full-name' className='border p-2'/>
                    </div>
                    <div className='flex flex-col py-2'> 
                    <input type='text' placeholder='username' className='border p-2'/>
                    </div>

                    <div className='flex flex-col py-2'> 
                    <input type='password' placeholder='password' className='border p-2'/>
                    </div>

                    <button className='border w-full my-5 py-2 bg-sky-600  hover:bg-black text-white text-lg font-bold'>Sign up</button>
                    <div className='text-center font-semibold'>
                        <p>already have an account  ?  <Link to='/login' className=' cursor-pointer text-white text-lg ml-4 border p-2 bg-black hover:bg-sky-600  '>  sign in </Link> </p>
                    </div>



                
                
                

                </div>
            </form>
        </div>


    </div>
  )
}

export default Register