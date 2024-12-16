import React, { createContext } from "react";
// import Home from "./components/Home/Home";
// import Blogs from "./components/Blogs/Blogs";
// import Nav from "./components/Nav/Nav";
// import { useEffect, useState } from "react";
// import KeyData from "./components/KeyData/KeyData";
// import { data } from "autoprefixer";
// import Products from './components/Products/Products'
// import ExplorerData from './components/ExploreData/ExplorerData'
import { useState } from "react";
import ContextNav from "./components/ContextNav";
import Context1, { Context1Provider } from "./Contexts/Context1";
// import PersonItem from "./components/PersonItem/PersonItem";
// import Persons from "./components/Persons/Persons";

// export const countContext = createContext()
// export const anotherContext = createContext()

function App() {

  // const [personnItem, setpersonnItem] = useState([])
  
  // const addpersons = (fkData) => {
  //   const newItem = [...personnItem, fkData]
  //   setpersonnItem(newItem)
  // }

  
  // const [isClick, setIsClick] = React.useState(false)
  
  // const toggleButton = () => {
  //   setIsClick(!isClick)
  // }
  
  // const conditionStyle = {
  //   color: isClick ? 'white' : 'black',
  //   backgroundColor: isClick ? 'blue' : 'cyan'
  // }

  // const [count, setCount] = useState(0)
  // const [another, setAnother] = useState(10)

  return (
    // <div className="flex gap-x-6">
    //   <Persons 
    //   addpersons = {addpersons}
    //   ></Persons>
    //   <PersonItem 
    //   personnItem = {personnItem}
    //   ></PersonItem>
    // </div>

    // <div className="flex p-10 m-20 justify-center gap-6">

    //   <button onClick={toggleButton} className="bg-green-700 text-white p-5 rounded-full">
    //     {!isClick ? 'clicked' : 'not clicked'}
    //   </button>

    //   <div style={conditionStyle} className="bg-green-700 text-white p-5 rounded-full">
    //      hey {!isClick ? 'clicked' : 'not clicked'} !!!
    //   </div>

    // </div>


    // <div>
    //    <anotherContext.Provider value={[another, setAnother]}>
    //       <countContext.Provider value={[count, setCount]}>
            
    //         <ContextNav />

    //         <div className="flex justify-center m-5 p-5">
    //         <button onClick={()=> setCount(count + 1)} className="p-5 bg-green-600 text-yellow-200 rounded-3xl">Count 1 = {count} </button>
    //         </div>
    //       </countContext.Provider>
    //    </anotherContext.Provider>
    // </div>



    <div>
      <Context1Provider>
        <ContextNav />

        <div className="flex justify-center m-5 p-5">
           {/* <button onClick={()=> setCount(count + 1)} className="p-5 bg-green-600 text-yellow-200 rounded-3xl">Count 1 = {count} </button> */}

           <button className="p-5 bg-green-600 text-yellow-200 rounded-3xl">Count 1</button>
        </div>
        
      </Context1Provider>
    </div>
  );
}

  // const products = [
  //   {name: 'monitor', price: 4000},
  //   {name: 'keyboard', price: 2000},
  //   {name: 'mouse', price: 400},
  // ]

  // const alertt = () => {
  //   window.alert(`heey I'm here`)
  // }

  // const style = {
  //   textAlign: "center",
  //   fontSize: "60px",
  //   color: "green",
  //   padding: "30px",
  // };

  // const button = {
  //   marginLeft: "850px",
  //   marginTop: "20px",
  // };

  // const [price, setPrice] = useState(10)

  // const incrementClick = () => {
  //   const updatePrice = price + 2
  //   setPrice(updatePrice)
  // }
  // const decrementClick = () => {
  //   const updatePrice = price - 2
  //   setPrice(updatePrice)
  // }

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   alert(`alerting`)
  // }, [])

  // useEffect(() => {
  //   alert(`count was changed`)
  // }, [count])

  // const [allData, setAllData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(res => res.json())
  //   .then(data => setAllData(data));
  // }, [allData]);

      {/* <Nav></Nav> */}
      {/* <Home></Home>
      <Blogs></Blogs> */}
      {/* {
        products.map(product => <Products 
        product = {product}
        alert = {alertt}
        ></Products>)
      }
     */}
      {/* <ExplorerData name = 'mahfuz' age = '25' profession = 'full stack developer'></ExplorerData>
      <ExplorerData name = 'shanto' age = '24' profession = 'mern stack developer'></ExplorerData>
      <ExplorerData name = 'sarmin' age = '28' profession = 'html css developer'></ExplorerData> */}

      {/* <button onClick={incrementClick} style={button}>Increment</button>
      <button onClick={decrementClick} style={button}>Decrement</button>
      <h1 style={style}>
        Price One: {price}
      </h1>
      <h3 style={style}>
        Price Two: {price}
      </h3>
      <h3 style={style}>
        Price Three: {price}
      </h3>
     */}

      {/* <h1 style={style}>Steps: {count} </h1>
     <button style={button} onClick={() => setCount(count + 1)}>Click</button>
   */}

     {/* <div className="bg-slate-600 text-yellow-50 text-6xl text-center p-5">
      <h1>Data {allData.length}</h1>
     </div>

     <div className="grid grid-cols-3 bg-slate-400 gap-8">
      {
        allData.map(keyData => 
          <KeyData 
          keyData = {keyData}
          key={keyData.id}
          ></KeyData>
        )
      }
      </div> */}
      

export default App;