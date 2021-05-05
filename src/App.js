import "./styles.css";
import Example from "./Example";

export default function App() {
  return (
    <div className="App">
      <div className="bigBox">
        <div className="smallBox"></div>
      </div>

      <div className="bigBox">
        <div className="smallBox2"></div>
      </div>
      <Example />
    </div>
  );
}
