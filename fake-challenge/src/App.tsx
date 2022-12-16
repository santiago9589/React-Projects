import './App.css'
import Layout from './component/Layout'
import ContextProvider from "../context/ContextProvider"
import ScreenComponent from './component/screen'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HistoryComponent from './component/HistoryComponent'

function App() {

  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={
            <Layout>
              <ScreenComponent />
            </Layout>} />
          <Route path='/history' element={
            <Layout>
              <HistoryComponent />
            </Layout>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>


  )
}

export default App
