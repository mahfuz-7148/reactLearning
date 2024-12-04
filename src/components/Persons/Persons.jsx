import React, { useEffect, useState } from 'react'
import Person from '../Person/Person'

const Persons = ({addpersons}) => {

    const [fakaData, setFakeData] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setFakeData(data))
    }, [])

  return (
    <div className='grid grid-cols-3 gap-10 bg-green-200'>
        {
            fakaData.map(fkData => <Person 
            key={fkData.id}
            fkData = {fkData}
            addpersons = {addpersons}
            ></Person>)
        }
    </div>
  )
}

export default Persons