import React from 'react'

const Button = ({action,text,className}) => {
  return (
    <div onClick={action} className={`btn-class  w-36 h-12 text-xs text-white pb-8 ${className?className:""}`}>{text}</div>
  )
}

export default Button