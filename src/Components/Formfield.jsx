import React from 'react'

const Formfeild = ({labelName,type,name,placeholder,value,handelChange}) => {
  return (
    <div  >
      <div  className='flex items-center gap-2 mb-2'>
     <label htmlFor={name} className="block text-sm font-medium text-white">{labelName}</label>
     
  </div>
  <input 
    type={type}
    id={name}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={handelChange}
    required
    className='bg-white border-gray-300 text-grey-700 text-sm rounded-lg focus:ring-[#ff49f9] focus:border-[#ff49f9] outline-none black w-full p-3'
  />



    </div>
  )
}

export default Formfeild
