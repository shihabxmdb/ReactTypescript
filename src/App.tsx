import "./App.css";
import { Status } from "./components/Status";

function App() {
  /* const name = {
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
  ];*/
  return (
    <div className="App">
      <Status Status="error" />
      {/**
           <Greet name="shihab" messageCount={10} isLogedIn={true} />
      <Persion name={name} />
      <PersionList names={nameList} />
       */}
    </div>
  );
}

export default App;
