
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState("dark");
  const ModeChange = () => {
    if(Mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    }
  }

  return (
    <>
    <Navbar title = "Blog" name="About" com = "Contact us" mode = {Mode} toggle = {ModeChange}/>
    <Textform  mode = {Mode}/>
    </>
  );
}
export default App;
