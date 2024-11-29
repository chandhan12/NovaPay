import React from 'react'

const InputBox = ({label,placeholder}) => {
  return (
    <div className='pb-2'>
         <div className="text-sm font-medium text-left py-2 pl-2">
        {label}
      </div>
      <input  placeholder={placeholder} className="w-80 ml-2  pl-2 pr-2 border rounded border-slate-200" />
      
    </div>
  )
}

export default InputBox
