import React from 'react'
import { ReactComponent as PlaySvg } from './play-button-svgrepo-com.svg';
const Button = () => {
  return (
      <div className='flex gap-4 text-3xl justify-between rounded-full bg-red-600 px-6 pb-2 pt-2.5 text-white hover:bg-red-500'>
          <div><PlaySvg/></div>
          <div>PLAY</div>
    </div>
  )
}

export default Button