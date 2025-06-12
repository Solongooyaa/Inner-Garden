"use client"
import React, { useState } from 'react'
const moods = [
  { emoji: '😊', label: 'Баяртай' },
  { emoji: '😐', label: 'Тайван' },
  { emoji: '😢', label: 'Гунигтай' },
  { emoji: '😤', label: 'Стресс' },
  { emoji: '🥰', label: 'Жаргалтай' },
]

function MoodPicker({onSelect} : {onSelect: (mood: string) => void}) {
    const [selected, setSelected] = useState<string | null>(null)
  return (
    <div className='m-2'> 
        {moods.map(({emoji, label}) => (<button key={emoji} onClick={() => {
        setSelected(emoji);
        onSelect(emoji);
    }} className={`text-md p-1 m-1 border-pink-500 rounded-full border transition ${selected === emoji ? 'bg-pink-100 gap-4 border-pink-300 scale-110' : 'hover:bg-pink-50'}`} 
    aria-label={label}>
        {emoji}
    </button>
    ))}
    </div>
  )
}

export default MoodPicker