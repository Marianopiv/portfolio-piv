import React from 'react'

const Button = ({action,text,className}) => {
  return (
    <div onClick={action} className={`bg-blue-900 text-sm font-bold text-white uppercase font-sans hover:bg-blue-800 hover:cursor-pointer rounded-md p-3 ${className}`}>{text}</div>
  )
}

export default Button