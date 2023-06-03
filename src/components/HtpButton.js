import React from 'react'
import { ReactComponent as QuestionMark } from "./question-mark.svg";

const HtpButton = () => {
  return (
    <div className='font-plaguard flex gap-3 text-3xl justify-center rounded-full shadow-2xl border-4 transition ease-in-out duration-300 border-black bg-green-700 px-6 py-2 text-white hover:bg-green-800'>
    <QuestionMark/>
    <div className='text-5xl pt-1.5'>HOW TO PLAY</div>
</div>
  )
}

export default HtpButton