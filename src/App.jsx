
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [Alerted, setAlert] = useState("");

  const Alerting = (typ, msg) => {
    setAlert({
      type: typ,
      message: msg
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  const ModeChange = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      Alerting("success", "Successfully Enabled Dark Mode")
    }
    console.log("val")
  }
  const AdvancedToggle = (val) => {
    if (val === 1) {
      setMode("primary");
      document.body.style.backgroundColor = "#0d6efd";
      Alerting("success", "Successfully Enabled primary Mode")
    }
    else if (val === 2) {
      setMode("secondary");
      document.body.style.backgroundColor = "#6c757d";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else if (val === 3) {
      setMode("success");
      document.body.style.backgroundColor = "#198754";
      Alerting("success", "Successfully Enabled secondary Mode")
    }
    else if (val === 4) {
      setMode("danger");
      document.body.style.backgroundColor = "#dc3545";
      Alerting("success", "Successfully Enabled danger Mode")
    }
    else if (val === 5) {
      setMode("warning");
      document.body.style.backgroundColor = "#ffc107";
      Alerting("success", "Successfully Enabled warning Mode")
    }
    else if (val === 6) {
      setMode("info");
      document.body.style.backgroundColor = "#0dcaf0";
      Alerting("success", "Successfully Enabled info Mode")
    }
    console.log(val);
  }

  return (
   
    <Router>
      <Navbar title="Home" about="About" contact="Contact us" mode={Mode} toggle={ModeChange} Admode={AdvancedToggle}/>
      <Alert alrt={Alerted} />
      
      <Switch>

          <Route path="/about" >
            <Textform alrtt={Alerting} mode={Mode} />     
          </Route>

          <Route path="/">
            <Contact  mode={Mode}/>
          </Route>

          <Route path="/">
            <Profile  mode={Mode}/>
          </Route>

        </Switch>
        
        <Footer mode={Mode} Admode={AdvancedToggle}/>
      </Router>


  );
}

export default App;
