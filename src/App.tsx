import "./App.css";
import { Container } from "./components/Container";
import { Index } from "./components/index";

function App() {
  return (
    <div className="App">
      <Container styles={{ border: "3px solid red", padding: "1rem" }} />
      <Index />
    </div>
  );
}

export default App;
