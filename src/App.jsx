import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Nav from "./components/Nav/Nav"
import Products from './components/Products/Products'
// import ExplorerData from './components/ExploreData/ExplorerData'

function App() {

  const products = [
    {name: 'monitor', price: 4000},
    {name: 'keyboard', price: 2000},
    {name: 'mouse', price: 400},
  ]

  const alertt = () => {
    window.alert(`heey I'm here`)
  }

  return(
    <div>

      <Nav></Nav>
      <Home></Home>
      <Blogs></Blogs>
      {
        products.map(product => <Products 
        product = {product}
        alert = {alertt}
        ></Products>)
      }
    
      {/* <ExplorerData name = 'mahfuz' age = '25' profession = 'full stack developer'></ExplorerData>
      <ExplorerData name = 'shanto' age = '24' profession = 'mern stack developer'></ExplorerData>
      <ExplorerData name = 'sarmin' age = '28' profession = 'html css developer'></ExplorerData> */}
  
    </div>
  )
}

export default App