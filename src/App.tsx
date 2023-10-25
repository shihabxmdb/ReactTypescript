import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar";

function App() {
  return (
    <div className="App">
      <Status Status="success" />
      <Heading>Placeholder Test</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario</Heading>
      </Oscar>
      <Greet name="Hasannnnn"  isLogedIn={true} />
    </div>
  );
}

export default App;
