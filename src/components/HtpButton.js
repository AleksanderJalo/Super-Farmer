import React from 'react'
import { ReactComponent as QuestionMark } from "./question-mark.svg";

const HtpButton = () => {
  return (
    <div className='font-plaguard flex gap-1.5 text-3xl justify-between rounded-full shadow-2xl border-2 transition ease-in-out duration-300 border-black bg-green-700 px-6 pb-2 pt-2.5 text-white hover:bg-green-900'>
    <QuestionMark/>
    <div>HOW TO PLAY</div>
</div>
  )
}

export default HtpButton