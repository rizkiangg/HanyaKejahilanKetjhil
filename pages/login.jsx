import React from 'react'
import Mbake from '../public/gambarMbake.svg'
const login = () => {
  return (
    <div className=' h-[80vh] w-full  flex my-16 '>
        <div className='bg-white rounded-2xl shadow-2xl mx-20 w-full flex'>
            <div className='w-2/3'>ini sign in</div>
            <div className='w-1/3 text-center text-white bg-[#8FD75C] rounded-r-2xl'>
                <h1 className='text-[36px] mt-14 font-semibold '>Hey, Welcome</h1>                 
                <div className='border-2 w-3/4 inline-block border-white'></div>
                <img src="../public/gambarMbake.svg" alt="Mbake mbake" /> 
            </div>
        </div>
    </div>
  )
}

export default login