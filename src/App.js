import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"

import {Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
        <AuthProvider>
         <Navbar/>
        <Login/>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
