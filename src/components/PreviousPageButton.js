import React from 'react'
import { ReactComponent as Arrow } from "../images/arrow_right.svg";
const NextPageButton = (props) => {
  return (
    <div className="rounded-xl flex justify-center items-center p-6 bg-red-700 absolute border-8 border-black text-white cursor-pointer h-[150px] w-[200px] text-4xl font-skranji -bottom-8 lefts-12 hover:bg-red-600" onClick={props.onClick}>Previous Page</div>
  )
}

export default NextPageButton