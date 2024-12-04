import React from 'react'

const Person = ({fkData, addpersons}) => {
    const {name, age, profession, phone, email, address} = fkData

   
  return (
    <div className='border-2 border-blue-900 gap-10 p-10 justify-items-center'>
        <h1 className='text-2xl'>{name}</h1>
        <h1 className='text-2xl'>{age}</h1>
        <h1 className='text-2xl'>{profession}</h1>
        <h1 className='text-2xl'>{phone}</h1>
        <h1 className='text-2xl'>{email}</h1>
        <h1 className='text-2xl'>{address}</h1>
        <button onClick={() => addpersons(fkData)} className='bg-blue-500 text-white p-5 mt-5 rounded-xl text-xl'>Add Person</button>
    </div>
  )
}

export default Person