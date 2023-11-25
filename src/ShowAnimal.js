import React, { useState } from "react";
import "./ShowAnimal.css";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};

export default function ShowAnimal({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => setClicks((prev) => prev + 1);
  return (
    <div
      className="show-animal"
      onClick={handleClick}
      title="click on the animal"
    >
      <img
        src={svgMap[type]}
        alt="animal"
        className="animal"
      />

      <img
        src={heart}
        alt="heart"
        style={{
          width: `${10 + 10 * clicks}px`,
        }}
        className="heart"
      />
    </div>
  );
}
