import React, { useState } from "react";
import ShowAnimal from "./ShowAnimal";

const animals = ["bird", "cat", "cow", "dog", "gator", "heart", "horse"];

const getRandomAnimal = () => {
  if (animals.length === 0) return;

  const randomNumber = Math.floor(Math.random() * animals.length);
  return animals[randomNumber];
};

export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {animals.map((animal, index) => (
        <ShowAnimal
          type={animal}
          key={index}
        />
      ))}
    </div>
  );
}
