import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TemplatesPage from './Components/TemplatesPage'
import Homepage from './Components/Homepage'
 
function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path= "/template" element={<TemplatesPage/>}/>
            <Route path= "/Home" element={<Homepage/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
