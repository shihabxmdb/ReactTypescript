import "./App.css";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container styles={{ border: "3px solid red", padding: "1rem" }} />
    </div>
  );
}

export default App;
