import React from 'react';

const Button = ({buttonName}) => {
  return (
    <div>
        <button className='px-6 py-2 m-2 bg-gray-200 rounded-[10px] '>{buttonName}</button>
    </div>
  )
}

export default Button