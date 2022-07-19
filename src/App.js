
import './App.css';
import Adduser from './component/Adduser';
import Home from './component/Home';
import Navebar from './component/Navebar';
import { Routes, Route } from "react-router-dom";
import AppContextProvider from './component/Context/AppContext';



function App() {
  return (
    <AppContextProvider>

   
    <div className="App">
     <Navebar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Home/>} />
        <Route path="add" element={<Adduser/>} />
      </Routes>
     
     
    </div>
    </AppContextProvider>
  );
}

export default App;
