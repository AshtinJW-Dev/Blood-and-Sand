"use client"
import { useState, useEffect, useCallback } from 'react';
import GladiatorCard from './GladiatorCard'; // Import the new GladiatorCard component

const LudusPage = () => {
  interface Gladiator {
    id: number;
    name: string;
    health: number;
    attack: number;
    defense: number;
    speed: number;
    level: number;
    stamina: number;
    experience: number;
    specialAbility: boolean;
  }
  
  const [gladiators, setGladiators] = useState<Gladiator[]>([]);
  const [newGladiator, setNewGladiator] = useState({ name: '', health: 100, attack: 10, defense: 10, speed: 10, level: 1, stamina: 10, experience: 0, specialAbility: false });

  const fetchGladiators = useCallback(async () => {
    try {
      console.log('Fetching gladiators...');
      const response = await fetch('http://192.168.3.97:5000/api/gladiators');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched gladiators:', data);
      setGladiators(data);
    } catch (err) {
      console.error('Failed to fetch gladiators:', err);
    }
  }, []);

  useEffect(() => {
    fetchGladiators();
  }, [fetchGladiators]);


  const trainGladiator = async (id: string | number, skill: string) => {
    if (!id) {
      console.error('Invalid gladiator ID for training');
      return;
    }
    const gladiator = gladiators.find(g => g.id === id);
    if (gladiator && gladiator.stamina < 5) {
      console.error('Not enough stamina to train');
      return;
    }
    try {
      console.log(`Training gladiator with id: ${id} in skill: ${skill}`);
      const response = await fetch(`http://192.168.3.97:5000/api/gladiators/train/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skill }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedGladiator = await response.json();
      setGladiators((prevGladiators) =>
        prevGladiators.map((gladiator) =>
          gladiator.id === id ? { ...gladiator, ...updatedGladiator } : gladiator
        )
      );
    } catch (err) {
      console.error('Failed to train gladiator:', err);
    }
  };

  const healGladiator = async (id: string | number) => {
    if (!id) {
      console.error('Invalid gladiator ID for healing');
      return;
    }
    const gladiator = gladiators.find(g => g.id === id);
    if (gladiator && gladiator.stamina < 5) {
      console.error('Not enough stamina to heal');
      return;
    }
    try {
      console.log(`Healing gladiator with id: ${id}`);
      const response = await fetch(`http://192.168.3.97:5000/api/gladiators/heal/${id}`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const healedGladiator = await response.json();
      setGladiators((prevGladiators) =>
        prevGladiators.map((gladiator) =>
          gladiator.id === id ? { ...gladiator, ...healedGladiator } : gladiator
        )
      );
    } catch (err) {
      console.error('Failed to heal gladiator:', err);
    }
  };

  const deleteGladiator = async (id: string | number) => {
    if (!id) {
      console.error('Invalid gladiator ID for deletion');
      return;
    }
    try {
      console.log(`Deleting gladiator with id: ${id}`);
      const response = await fetch(`http://192.168.3.97:5000/api/gladiators/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setGladiators((prevGladiators) =>
        prevGladiators.filter((gladiator) => gladiator.id !== id)
      );
    } catch (err) {
      console.error('Failed to delete gladiator:', err);
    }
  };

  const createGladiator = async () => {
    try {
      console.log('Creating new gladiator:', newGladiator);
      const response = await fetch('http://192.168.3.97:5000/api/gladiators', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGladiator),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const createdGladiator = await response.json();
      setGladiators((prevGladiators) => [...prevGladiators, { id: createdGladiator.id, ...newGladiator }]);
      setNewGladiator({ name: '', health: 100, attack: 10, defense: 10, speed: 10, level: 1, stamina: 10, experience: 0, specialAbility: false });
    } catch (err) {
      console.error('Failed to create gladiator:', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Ludus (Gladiator Training)</h1>
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create New Gladiator</h2>
        <input
          type="text"
          placeholder="Name"
          value={newGladiator.name}
          onChange={(e) => setNewGladiator({ ...newGladiator, name: e.target.value })}
          className="border p-2 rounded mb-2 w-full"
        />
        <button
          onClick={createGladiator}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Create Gladiator
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gladiators.map((gladiator) => (
          <GladiatorCard
            key={gladiator.id}
            gladiator={gladiator}
            trainGladiator={trainGladiator}
            healGladiator={healGladiator}
            deleteGladiator={deleteGladiator}
          />
        ))}
      </div>
    </div>
  );
};

export default LudusPage;
