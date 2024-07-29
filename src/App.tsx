import { useState } from "react";
import "./App.css";
import { random, RandomFox } from "./components/RandomFox";

type ImageItems = {
  id: number;
  url: string;
};

function App() {
  const [images, setImages] = useState<ImageItems[]>([
    { id: 1, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 2, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 3, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 4, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 5, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 6, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 7, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 8, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 9, url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: 10, url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <>
      <div className="flex gap-2 flex-row flex-wrap">
        {images.map(({ id, url }) => (
          <RandomFox key={id} image={url} />
        ))}
      </div>
    </>
  );
}

export default App;
