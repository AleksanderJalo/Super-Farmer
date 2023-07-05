import React from 'react'
import { ReactComponent as Arrow } from "../images/arrow_right.svg";
const NextPageButton = (props) => {
  return (
    <div className="rounded-full flex justify-center items-center p-3 rotate-180 bg-green-500 absolute border-8 border-black h-[150px] w-[150px] bottom-10 lefts-12 hover:bg-green-400" onClick={props.onClick}><Arrow/></div>
  )
}

export default NextPageButton