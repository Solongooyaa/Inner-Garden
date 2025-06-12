'use client'
import React, { useState } from 'react'
type Props = {
    onChange: (text: string) => void;
}

function MoodComment({onChange} : Props) {
    const [value, setValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }
  return (
    <div>
        <textarea
        value={value}
        onChange={handleChange}
        placeholder='Бичих хэсэг...'
        rows={4}
        className='w-full p-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-[#ffffff] text-gray-500 resize-none'
        />
    </div>
  )
}

export default MoodComment