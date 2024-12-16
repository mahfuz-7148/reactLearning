import React, { useContext } from 'react'
import LastNav from './LastNav'
import Context1 from '../Contexts/Context1'
// import { anotherContext } from '../App'

const InsideNav = () => {
  // const [another, setAnother] = useContext(anotherContext)
  const [count, setCount] = useContext(Context1)
  return (
    <div>
        <LastNav />

        <div className="flex justify-center m-5 p-5">
        {/* <button onClick={()=> setAnother(another + 1)} className="p-5 bg-green-600 text-yellow-200 rounded-3xl">Count 3 = {another} </button> */}
        <button>count {count} </button>
        </div>
    </div>
  )
}

export default InsideNav