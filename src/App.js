import HomePage from './components/HomePage/HomePage';
import './App.css';
import DesignAtalog from './components/DesignAtalog/DesignAtalog';
import {
  Routes,
  Route,
 
} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/design" element={<DesignAtalog/>} />
    </Routes>
    </div>
  );
}

export default App;
