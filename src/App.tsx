import "./App.css";
import { Button } from "./components/Button.tsx";
import { Input } from "./components/Input.tsx";
function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
