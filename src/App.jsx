import {Routes, Route} from "react-router-dom";
import './App.css'
import Players from "./features/players/Players";



function App() {
  

  return (
    <>
    <div>
      <Routes>
        <Route index element={<Players />} />
        <Route path={"/Player/:id"} element={<Players />} />
      </Routes>

    </div>
     
    </>
  )
}

export default App
