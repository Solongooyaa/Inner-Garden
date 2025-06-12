'use client'
import React, { useState } from 'react'
import MoodPicker from './_components/MoodPicker'
import MoodComment from './_components/MoodComment'
import SaveMoodButton from './_components/SaveMoodButton'
import { toast } from 'react-hot-toast';

function JournalPage() {
    const [mood, setMood] = useState('');
    const [comment, setComment] = useState('');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        console.log('saved mood', mood)
        console.log('comment', comment);
        setSaved(true);
        toast.success('Амжилттай хадгалагдлаа! 🌱');
    }

  return (
    <div className='w-60 p-2 border rounded-md m-4 border-pink-400'>
     <p className='text-md font-bold text-pink-300'> 🌸 Mood journal</p> 
      <MoodPicker onSelect={setMood} />
        <MoodComment onChange={setComment} />
        <SaveMoodButton onClick={handleSave} disabled={!mood || !comment} />
        {saved && <p className='text-green-600 mt-4 absolute bottom-4'></p>}
    </div>
  )
}

export default JournalPage