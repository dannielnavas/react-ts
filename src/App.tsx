import type { MouseEventHandler } from "react";
import { useState } from "react";
import "./App.css";
import { random, RandomFox } from "./components/RandomFox";

type ImageItems = {
  id: number;
  url: string;
};

function App() {
  const [images, setImages] = useState<ImageItems[]>([]);

  const addNewImage: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newImage: ImageItems = {
      id: images.length + 1,
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newImage]);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        onClick={addNewImage}
      >
        Add image
      </button>
      <div className="flex gap-2 flex-row flex-wrap justify-center">
        {images.map(({ id, url }) => (
          <RandomFox key={id} image={url} />
        ))}
      </div>
    </>
  );
}

export default App;
