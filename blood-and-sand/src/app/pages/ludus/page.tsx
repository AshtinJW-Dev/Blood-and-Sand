"use client"
// src/pages/ludus.tsx
import { useState } from 'react';

const LudusPage = () => {
  // Sample gladiator data
  const [gladiators, setGladiators] = useState([
    {
      id: 1,
      name: "Maximus",
      health: 100,
      attack: 15,
      defense: 10,
      speed: 5,
      level: 1,
    },
    {
      id: 2,
      name: "Commodus",
      health: 80,
      attack: 18,
      defense: 8,
      speed: 7,
      level: 1,
    },
  ]);

  // Training function to increase gladiator stats
  const trainGladiator = (id: number) => {
    setGladiators((prevGladiators) =>
      prevGladiators.map((gladiator) =>
        gladiator.id === id
          ? {
              ...gladiator,
              attack: gladiator.attack + 5,
              health: gladiator.health + 10,
              level: gladiator.level + 1,
            }
          : gladiator
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Ludus (Gladiator Training)</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gladiators.map((gladiator) => (
          <div key={gladiator.id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{gladiator.name}</h3>
            <p>Health: {gladiator.health}</p>
            <p>Attack: {gladiator.attack}</p>
            <p>Defense: {gladiator.defense}</p>
            <p>Speed: {gladiator.speed}</p>
            <p>Level: {gladiator.level}</p>
            <button
              onClick={() => trainGladiator(gladiator.id)}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Train Gladiator
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LudusPage;
