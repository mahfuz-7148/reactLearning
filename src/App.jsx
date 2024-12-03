// import Home from "./components/Home/Home";
// import Blogs from "./components/Blogs/Blogs";
// import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import KeyData from "./components/KeyData/KeyData";
import { data } from "autoprefixer";
// import Products from './components/Products/Products'
// import ExplorerData from './components/ExploreData/ExplorerData'

function App() {
  
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

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setAllData(data));
  }, [allData]);

  return (
    <div>
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

     <div className="bg-slate-600 text-yellow-50 text-6xl text-center p-5">
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
      </div>
      
    </div>
  );
}

export default App;
