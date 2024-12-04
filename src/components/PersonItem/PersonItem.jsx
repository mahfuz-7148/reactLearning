import React from 'react'
import EachPerson from '../eachPerson/eachPerson'

const PersonItem = ({personnItem}) => {
    
  return (
    <div className='justify-items-center m-5'>
        <h1 className='text-3xl border-2 border-green-800 bg-red-200 p-2'>Person Item: {personnItem.length}</h1>

         {
            personnItem.map(eachItem => <EachPerson
            key={eachItem.id}
            eachItem = {eachItem}
            ></EachPerson>)
         }
    </div>
  )
}

export default PersonItem