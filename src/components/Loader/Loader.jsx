import { useEffect, useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import css from "./Loader.module.css";

export default function Loader({ children }) {
  const [triangles, setTriangles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTriangles((prevTriangles) =>
        prevTriangles.length < 3
          ? [
              ...prevTriangles,
              <VscTriangleRight
                key={prevTriangles.length}
                className={css.icon}
                aria-label="triangles icon"
              />,
            ]
          : []
      );
    }, 550);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {children}
      {triangles}
    </span>
  );
}
