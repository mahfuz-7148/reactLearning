import React from 'react'

const EachPerson = ({eachItem}) => {
    const {name, age, profession, phone, email, address} = eachItem
  return (
    <div className='border-2 border-green-800 bg-red-200 mt-5 p-5'>
        <h1 className='text-2xl'>Name: {name} </h1>
        <p className='text-xl'>Age: {age} </p>
        <p className='text-xl'>Profession: {profession} </p>
        <p className='text-xl'>Phone: {phone} </p>
        <p className='text-xl'>Email: {email} </p>
        <p className='text-xl'>Address: {address} </p>
    </div>
  )
}

export default EachPerson