import "./App.css";
import { Greet } from "./components/Greet";
import { Persion } from "./components/Persion";
import { PersionList } from "./components/PersionList";

function App() {
  const name = {
    first: "Shi",

    last: "hab",
  };
  const nameList = [
    {
      first: "abc",
      last: "de",
    },
    {
      first: "bc",
      last: "e",
    },
    {
      first: "bcqq",
      last: "eqq",
    },
  ];
  return (
    <div className="App">
      <Greet name="shihab" messageCount={10} isLogedIn={true} />
      <Persion name={name} />
      <PersionList names={nameList} />
    </div>
  );
}

export default App;
