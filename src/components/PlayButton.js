import React from 'react'
import { ReactComponent as PlaySvg } from './play-circle-svgrepo-com.svg';
const Button = (props) => {
  return (
      <div onClick={props.onClick} className='font-plaguard flex gap-1.5 text-3xl justify-between rounded-full shadow-2xl border-2 transition ease-in-out duration-300 border-black bg-red-700 px-6 pb-2 pt-2.5 text-white hover:bg-red-900'>
          <div><PlaySvg/></div>
          <div>PLAY</div>
    </div>
  )
}

export default Button