import { useState } from "react";
import "./App.css";
import { random, RandomFox } from "./components/RandomFox";

function App() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <>
      <div className="flex gap-2 flex-row flex-wrap">
        {images.map((image, index) => (
          <RandomFox key={index} image={image} />
        ))}
      </div>
    </>
  );
}

export default App;
