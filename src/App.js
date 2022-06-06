import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
// import Navbar from "./components/Navbar/Navbar"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <Login/>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
