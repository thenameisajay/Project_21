import "./styles.css";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="display-3 fw-bold main-header">PUZZLO</h1>
        <h2 className="display-10 fw-bold main-subheader">-Every Day New Password-</h2>
        <Home />
      </div>
    </div>
  );
}
