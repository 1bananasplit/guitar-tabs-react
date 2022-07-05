import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Tabs from './pages/Tabs'

function App() {
  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/tab/:nom" element = {<Tabs />}/>
      </Routes>
     </BrowserRouter>
  )
}
export default App;
