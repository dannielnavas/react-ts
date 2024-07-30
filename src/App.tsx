import type { MouseEventHandler } from "react";
import { useState } from "react";
import "./App.css";
import { LazyImage, random } from "./components/LazyImage";

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
          <LazyImage key={id} src={url} onClick={() => console.log("click")} />
        ))}
      </div>
    </>
  );
}

export default App;
