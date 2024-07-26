import "./App.css";
import { random, RandomFox } from "./components/RandomFox";

function App() {
  const image = `https://randomfox.ca/images/${random()}.jpg`;
  return (
    <>
      <RandomFox image={image} />
    </>
  );
}

export default App;
