import React from 'react'
import { ReactComponent as Arrow } from "../images/arrow_right.svg";
const NextPageButton = () => {
  return (
    <div className="rounded-full flex justify-center items-center bg-green-600 absolute border-8 border-black h-[100px] w-[100px] bottom-20 right-32"><Arrow/></div>
  )
}

export default NextPageButton