import HomePage from './components/HomePage/HomePage';
import './App.css';
import DesignAtalog from './components/DesignAtalog/DesignAtalog';
import {
  Routes,
  Route,
  Link

} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1 className='warning'>* For better experinece see this on dimensions 1503 x 1125 </h1>
      <div>
        <Link to="/" className="heading1"> Home Page</Link>
        <Link to="/design" className="heading2" >Design Catalog</Link>
      </div>

    </div>

  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<DesignAtalog />} />
      </Routes>
    </div>
  );
}

export default App;
