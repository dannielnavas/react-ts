// import type { FC, FunctionComponent } from "react";

import type { ImgHTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";

// export const RandomFoxImpl = () => {
//   return <img src="https://randomfox.ca/images/1.jpg" alt="Random fox" />;
// };

// random de un numero entre 1 y 123
export const random = () => {
  return Math.floor(Math.random() * 123) + 1;
};

type lazyImageProps = {
  alt?: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = lazyImageProps & ImageNative;

export const LazyImage = ({ src, onLazyLoad, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null); // null es el valor inicial siempre inicializar para evitar errores
  const [currentSrc, setCurrentSrc] = useState<string>(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Intersecting");
          if (src) setCurrentSrc(src);
        }
      });
    });

    if (node.current) {
      onLazyLoad && onLazyLoad(node.current);
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [currentSrc, onLazyLoad, src]);

  return (
    <img
      ref={node}
      src={currentSrc}
      className="rounded-lg h-80 w-80 aspect-video bg-gray-500"
      {...imgProps}
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
