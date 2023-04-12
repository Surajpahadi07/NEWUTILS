
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState("dark");
  const [AdMode, setAdMode] = useState(null);
  const [Alerted, setAlert] = useState("");
  var val

  const AdvancedMode = {
    1: "primary",
    2: "secondary",
    3: "success",
    4: "danger",
    5: "warning",
    5: "info"
  }

  const Alerting = (typ, msg) => {
    setAlert({
      type: typ,
      message: msg
    })
    setTimeout(() => {
      // setAlert(null);
    }, 10000);
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
  }

  const AdvancedToggle = () => {
    if (val == 1) {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else if (val == 2) {
      setMode("secondary");
      document.body.style.backgroundColor = "white";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else if (val == 3) {
      setMode("success");
      document.body.style.backgroundColor = "white";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else if (val == 4) {
      setMode("danger");
      document.body.style.backgroundColor = "white";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else if (val == 5) {
      setMode("warning");
      document.body.style.backgroundColor = "white";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    else if (val == 6) {
      setMode("info");
      document.body.style.backgroundColor = "white";
      Alerting("success", "Successfully Enabled Light Mode")
    }
    console.log("val");
  }

  return (
    <>
      <Navbar title="Blog" name="About" com="Contact us" mode={Mode} toggle={ModeChange} Admode={AdvancedToggle} />
      <Alert alrt={Alerted} />
      <Textform alrtt={Alerting} mode={Mode} />
    </>
  );
}
export default App;
