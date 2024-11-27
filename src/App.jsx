import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Nav from "./components/Nav/Nav"
import ExplorerData from './components/ExploreData/ExplorerData'

function App() {
  return(
    <div>

      <Nav></Nav>
      <Home></Home>
      <Blogs></Blogs>
      <ExplorerData name = 'mahfuz' age = '25' profession = 'full stack developer'></ExplorerData>
      <ExplorerData name = 'shanto' age = '24' profession = 'mern stack developer'></ExplorerData>
      <ExplorerData name = 'sarmin' age = '28' profession = 'html css developer'></ExplorerData>
  
    </div>
  )
}

export default App