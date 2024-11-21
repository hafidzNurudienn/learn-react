import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>alalal</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Button</Button>
    </div>
  );
}

export default App;
