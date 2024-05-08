import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { UserIndex } from "./view"
import Index from "./view/visitor"

function App() {

  return (
    <Router>
     <Routes>
     <Route path="/" Component={Index}/>
     <Route path="/admin" Component={UserIndex}/>
     </Routes>
    </Router>
  )
}

export default App
