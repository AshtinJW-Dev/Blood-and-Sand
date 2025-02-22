// src/app/ludus/game.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Shadcn button component

// Gladiator interface to hold stats
interface Gladiator {
  name: string;
  strength: number;
  agility: number;
  intelligence: number;
}

const Game = () => {
  const [gameState, setGameState] = useState<"running" | "paused" | "over">("running");
  const [gladiators, setGladiators] = useState<Gladiator[]>([]);
  const [resources, setResources] = useState({ gold: 100, food: 100, trainingPoints: 0 });

  const startNewGame = () => {
    setGladiators([]);
    setResources({ gold: 100, food: 100, trainingPoints: 0 });
    setGameState("running");
  };

  const addGladiator = (name: string) => {
    setGladiators([
      ...gladiators,
      { name, strength: 10, agility: 10, intelligence: 10 },
    ]);
  };

  const trainGladiator = (index: number, stat: "strength" | "agility" | "intelligence") => {
    const newGladiators = [...gladiators];
    newGladiators[index][stat] += 1;
    setGladiators(newGladiators);
    setResources((prev) => ({ ...prev, trainingPoints: prev.trainingPoints - 1 }));
  };

  const handleStartPause = () => {
    setGameState(gameState === "running" ? "paused" : "running");
  };

  const handleEndGame = () => {
    setGameState("over");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Ludus Gladiator Trainer</h1>

      {/* Gladiator Display */}
      <div className="mt-4">
        <h2 className="text-xl">Your Gladiators</h2>
        <div className="flex space-x-4 mt-2">
          {gladiators.map((gladiator, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded-md">
              <h3 className="font-bold">{gladiator.name}</h3>
              <p>Strength: {gladiator.strength}</p>
              <p>Agility: {gladiator.agility}</p>
              <p>Intelligence: {gladiator.intelligence}</p>
              <div className="mt-2">
                <Button
                  onClick={() => trainGladiator(index, "strength")}
                  disabled={resources.trainingPoints <= 0}
                >
                  Train Strength
                </Button>
                <Button
                  onClick={() => trainGladiator(index, "agility")}
                  disabled={resources.trainingPoints <= 0}
                >
                  Train Agility
                </Button>
                <Button
                  onClick={() => trainGladiator(index, "intelligence")}
                  disabled={resources.trainingPoints <= 0}
                >
                  Train Intelligence
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Controls */}
      <div className="mt-4">
        {gameState === "over" ? (
          <Button onClick={startNewGame}>Start New Game</Button>
        ) : gameState === "paused" ? (
          <Button onClick={handleStartPause}>Resume Game</Button>
        ) : (
          <Button onClick={handleStartPause}>Pause Game</Button>
        )}
        <Button onClick={handleEndGame} className="mt-2">
          End Game
        </Button>
      </div>

      {/* Resources */}
      <div className="mt-4">
        <h3 className="font-bold">Resources</h3>
        <p>Gold: {resources.gold}</p>
        <p>Food: {resources.food}</p>
        <p>Training Points: {resources.trainingPoints}</p>
      </div>

      {/* Add Gladiator */}
      <div className="mt-4">
        <Button onClick={() => addGladiator("New Gladiator")}>Add Gladiator</Button>
      </div>
    </div>
  );
};

export default Game;
