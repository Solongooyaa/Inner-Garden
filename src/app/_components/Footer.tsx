// "use client"
// import { motion } from 'framer-motion'
// import React, { useMemo } from 'react'
// import { Facebook, Youtube, Instagram } from 'lucide-react';
// const quotes = [
//     "🌱 Сэтгэлийн цэцэрлэг өдөр бүр арчилгаа шаарддаг.",
//     "Төөрөх нь өөрийгөө олж буй хэлбэр.",
//     "✨ Гэрэл гэгээ үргэлж дотроос эхэлдэг.",
//     "🌿 Чимээгүй байдал дотор өөрийгөө ол.",
//     "Нулимс урсаж байвал сэтгэл цэвэрлэгдэж байна гэсэн үг.",
//     "Төөрөх гэдэг бол замаа хайж буй ухаарал юм.",
//     "Урагшлахын тулд хааяа зогсох хэрэгтэй.",
//     "Өөрийгөө ойлгох нь бусдыг ойлгох эхлэл.",
//   ]
//  function Footer() {

//     const randomQuote = useMemo(() => {
//         return quotes[Math.floor(Math.random() * quotes.length)]
//     }, [])
//   return (
//     <div className='bg-[#F9FAFB] p-12 text-[#4B5563] font-light'>
//     <motion.div
//   initial={{ opacity: 0, y: 10 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
// >
//    {randomQuote}
// </motion.div>
// <div>
//     <Facebook/>
//     <Instagram/>
// </div>
//     </div>
//   )
// }

//  export default Footer
"use client"
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

const MotionImg = motion.img;
const MotionP = motion.p;

const quotes = [
  "🌱 Сэтгэлийн цэцэрлэг өдөр бүр арчилгаа шаарддаг.",
    "🌿Төөрөх нь өөрийгөө олж буй хэлбэр.",
    "✨ Гэрэл гэгээ үргэлж дотроос эхэлдэг.",
    "Нулимс урсаж байвал сэтгэл цэвэрлэгдэж байна гэсэн үг.",
    "Урагшлахын тулд хааяа зогсох хэрэгтэй.",
    "Өөрийгөө ойлгох нь бусдыг ойлгох эхлэл.",
];

function Footer() {
  return (
    <footer className="w-full absolute bottom-0 flex items-start justify-between bg-green-200 text-sm">
      <div className='px-10'>
      <motion.div
        className="relative w-38 h-38"
        initial="hidden" animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { delayChildren: 0.5, staggerChildren: 1 } }
        }}
      >
        <MotionImg
          src="/assets/wateringCan.svg"
          alt="watering can"
          animate={{ rotate: 25 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute top--1 left-2 -translate-x-1/2 w-12 h-12"
        />
        <motion.div className="absolute top-8 left-11 -translate-x-1/2 w-8 h-16 overflow-hidden">
          <motion.div
            className="w-2 h-2 bg-blue-400 rounded-full"
            animate={{ y: [0, 60] }}
            transition={{ repeat: Infinity, duration: 1, ease: 'easeIn' }}
          ></motion.div>
        </motion.div>
        <MotionImg
          src="/assets/grass.svg"
          alt="grass"
          className="absolute bottom-0 w-full h-10 object-cover text-green-500"
        />
        <MotionP
          className="absolute bottom-12 w-full text-center px-4 font-handwriting text-sm text-[#4B5563]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
           {quotes[Math.floor(Math.random() * quotes.length)]}
        </MotionP>
      </motion.div>
      </div>
      
      <div className='flex'>
       
      </div>
    </footer>
  );
}

export default Footer

