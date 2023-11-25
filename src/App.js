import React, { useState } from "react";
import ShowAnimal from "./ShowAnimal";
import "./App.css";

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
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">
        {animals.map((animal, index) => (
          <ShowAnimal
            type={animal}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
