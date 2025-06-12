import { div } from 'framer-motion/client';
import React from 'react'
type Props = {
    onClick: () => void;
    disabled?: boolean;
}

function SaveMoodButton({ onClick, disabled}: Props) {
  return (
    <div className='flex items-center justify-center w-full'>
 <button
    onClick={onClick}
    disabled={disabled}
    className={`mt-4 w-full p-2 cursor-pointer border rounded-full flex justify-center items-center font-semibold shadow-md transition-300 ${
        disabled ? ' text-gray-400 border-gray-400 cursor-not-allowed' : 'bg-[#fbb8cf] text-white hover:bg-pink-300'
    }`}>
        Хадгалах
    </button>
    </div>
   
  )
}

export default SaveMoodButton