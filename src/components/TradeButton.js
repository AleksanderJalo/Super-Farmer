import React from 'react'

const TradeButton = (props) => {
  return (
    <div className={`text-xl border-4 border-black mb-1 px-2 py-1 rounded-md  text-white cursor-pointer ${props.enabled ? "bg-red-600 hover:bg-red-500" :"bg-gray-700"}`}>Trade</div>
  )
}

export default TradeButton