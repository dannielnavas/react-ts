// import type { FC, FunctionComponent } from "react";

import { useEffect, useRef, useState } from "react";

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
  const [src, setSrc] = useState<string>(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Intersecting");
          setSrc(image);
        }
      });
    });

    if (node.current) observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <img
      ref={node}
      src={src}
      alt={alt || "Random fox"}
      className="rounded-lg h-80 w-80 aspect-video bg-gray-500"
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
