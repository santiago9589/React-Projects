import './App.css'
import Navigate from './components/containers/Navigation'
import RouterComponent from './components/containers/RouterComponent'
import Footer from "./components/containers/Footer"

function App() {

  return (
    <div className="flex m-0 w-screen h-screen bg-slate-200
    sm:flex-col ">
      <Navigate/>
      <RouterComponent/>
       {/* <Footer/> */}
    </div>
  )
}

export default App
