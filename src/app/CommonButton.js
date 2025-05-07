import React from 'react'

const CommonButton = ({text}) => {
  return (
    <div className='flex justify-center items-center'>
          {/* <Link href=""> */}
            <div className="min-w-auto h-12 flex justify-center items-center border border-stone-400 text-stone-800 uppercase tracking-widest text-sm transition duration-300">
             <a  className='  border-stone-400  px-6 py-2 mx-1 transition-all duration-300 ease-in-out hover:border-1 hover:border-stone-600 cursor-pointer'> {text}</a>
             
            </div>
          {/* </Link> */}
        </div>
  )
}

export default CommonButton