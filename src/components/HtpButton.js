import React from 'react'
import { ReactComponent as QuestionMark } from "./question-mark.svg";

const HtpButton = () => {
  return (
    <div className='font-plaguard flex gap-3 text-3xl justify-center rounded-full shadow-2xl border-2 transition ease-in-out duration-300 border-black bg-[#6D5E91] px-6 py-2 text-white hover:bg-green-900'>
    <QuestionMark/>
    <div className='text-5xl pt-1.5'>HOW TO PLAY</div>
</div>
  )
}

export default HtpButton