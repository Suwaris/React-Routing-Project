import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register";
import Brands from "./components/brands/Brands";
import DUMMY_DATA from "./components/Content"
import SpaCeylon from "./components/brands/SpaCeylon";
import Viana from "./components/brands/Viana";
import LastShow from "./components/products/LastShow";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register-user" element={<Register />} />
      <Route path="/brands" element={<Brands />}/>
      <Route path="/spaceylon" element={<SpaCeylon/>} />
      <Route path="/viana" element={<Viana/>} />
      
    </Routes>  
  );
}

export default App;
