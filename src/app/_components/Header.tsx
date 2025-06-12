import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-[#FCE4EC] p-6 flex justify-between '>
      <Link href='/'>
      <span className='text-xl text-gray-500 font-handwriting cursor-pointer'>💮 InnerGarden</span>
      </Link>
       
    <div>
        <div className='text-gray-500 cursor-pointer'>Нэвтрэх</div>
    </div>
    </div>
  )
} 

export default Header 