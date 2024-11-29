import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Nav from "./components/Nav/Nav"
import { useState } from 'react'
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

  const style = {
    textAlign: 'center',
    fontSize: '60px',
    color: 'green',
    padding: '30px'
  }

  const button = {
    marginLeft: '850px',
    marginTop: '20px'
  }

  const [price, setPrice] = useState(10)

  const incrementClick = () => {
    const updatePrice = price + 2
    setPrice(updatePrice)
  }
  const decrementClick = () => {
    const updatePrice = price - 2
    setPrice(updatePrice)
  }

  return(
    <div>

      <Nav></Nav>
      <Home></Home>
      <Blogs></Blogs>
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



      <button onClick={incrementClick} style={button}>Increment</button>
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
    
  
    </div>

    
  )
}

export default App