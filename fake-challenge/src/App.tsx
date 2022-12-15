import './App.css'
import Layout from './component/Layout'
import ContextProvider from "../context/ContextProvider"
import ScreenComponent from './component/screen'

function App() {

  return (
    <ContextProvider>
      <Layout>
       <ScreenComponent/>
      </Layout>
    </ContextProvider>

  )
}

export default App
