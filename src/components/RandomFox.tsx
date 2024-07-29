// import type { FC, FunctionComponent } from "react";

import { useRef } from "react";

// export const RandomFoxImpl = () => {
//   return <img src="https://randomfox.ca/images/1.jpg" alt="Random fox" />;
// };

// random de un numero entre 1 y 123
export const random = () => {
  return Math.floor(Math.random() * 123) + 1;
};

type RandomFoxProps = {
  image: string;
  alt?: string;
};

export const RandomFox = ({ image, alt }: RandomFoxProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null); // null es el valor inicial siempre inicializar para evitar errores

  return (
    <img
      ref={node}
      src={image}
      alt={alt || "Random fox"}
      className="rounded-lg h-80 w-80 aspect-video"
    />
  );
};
// aunque es parecido a javascript, no es lo mismo ya que typescript es un superset de javascript y hace inferencias en tipos

// export const RandomFoxFCF: FunctionComponent = () => {
//   return <img src="https://randomfox.ca/images/1.jpg" alt="Random fox" />;
// };

// export const RandomFoxFC: FC = () => {
//   return <img src="https://randomfox.ca/images/1.jpg" alt="Random fox" />;
// };
