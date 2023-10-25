import "./App.css";
import { Button } from "./components/Button.tsx";
function App() {
  return (
    <div className="App">
      <Button
        handleClick={() => {
          console.log("Button Clicked");
        }}
      ></Button>
    </div>
  );
}

export default App;
