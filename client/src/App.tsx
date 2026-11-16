
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState<string>(
    "Connecting to server..."
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/health")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Backend connection failed");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Smart Waste Management System</h1>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
