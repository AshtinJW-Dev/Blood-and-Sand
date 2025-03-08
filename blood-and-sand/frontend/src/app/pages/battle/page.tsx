"use client"
import { useState, useEffect } from 'react';

export default function Battle() {
  const [gladiators, setGladiators] = useState<{ id: number, name: string }[]>([]);
  const [selectedGladiator1, setSelectedGladiator1] = useState<{ id: number, name: string } | null>(null);
  const [selectedGladiator2, setSelectedGladiator2] = useState<{ id: number, name: string } | null>(null);
  const [battleResult, setBattleResult] = useState<{ winner: string, loser: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch gladiators from the backend
    console.log('Fetching gladiators...');
    fetch('http://192.168.3.97:5000/api/gladiators')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched gladiators:', data);
        setGladiators(data);
      })
      .catch(error => {
        console.error('Error fetching gladiators:', error);
        setError('Failed to fetch gladiators');
      });
  }, []);

  const handleBattle = () => {
    if (!selectedGladiator1 || !selectedGladiator2) {
      setError('Please select both gladiators');
      return;
    }

    setError(null); // Reset error state when both gladiators are selected

    console.log('Selected Gladiator 1:', selectedGladiator1);
    console.log('Selected Gladiator 2:', selectedGladiator2);

    fetch('http://192.168.3.97:5000/api/battles/fight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gladiator1Id: selectedGladiator1.id,
        gladiator2Id: selectedGladiator2.id
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Convert returned IDs to names using selected gladiators
      const winnerId = Number(data.winner);
      const isFirstWinner = selectedGladiator1 && selectedGladiator1.id === winnerId;
      const winnerName = isFirstWinner ? selectedGladiator1!.name : selectedGladiator2!.name;
      const loserName = isFirstWinner ? selectedGladiator2!.name : selectedGladiator1!.name;
      setBattleResult({ winner: winnerName, loser: loserName });
      setShowModal(true);
    })
    .catch(error => {
      console.error('Error starting battle:', error);
      setError('Failed to start battle');
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">⚔️ Battle Arena</h1>
      <p className="mt-2 text-gray-300">Enter the arena and fight for glory.</p>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-300 p-4 rounded">
          <h2>🏟️ Select Arena</h2>
          {/* Arena selection logic here */}
        </div>
        <div className="bg-gray-300 p-4 rounded">
          <h2>⚔️ Choose Opponent</h2>
          <select className='m-2' onChange={(e) => {
            if (!e.target.value) {
              setSelectedGladiator1(null);
              return;
            }
            const selected = gladiators.find(g => String(g.id) === e.target.value) || null;
            setSelectedGladiator1(selected);
            console.log('Gladiator 1 selected:', selected);
            setError(null);
          }}>
            <option value="">Select Gladiator 1</option>
            {gladiators.map(g => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>
          <select className='m-2' onChange={(e) => {
            if (!e.target.value) {
              setSelectedGladiator2(null);
              return;
            }
            const selected = gladiators.find(g => String(g.id) === e.target.value) || null;
            setSelectedGladiator2(selected);
            console.log('Gladiator 2 selected:', selected);
            setError(null);
          }}>
            <option value="">Select Gladiator 2</option>
            {gladiators.map(g => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="mt-6 bg-red-600 px-6 py-3 rounded" onClick={handleBattle}>Start Battle</button>
      {battleResult && showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold">Battle Result</h2>
            {/* Now directly displaying names */}
            <p>Winner: {battleResult.winner}</p>
            <p>Loser: {battleResult.loser}</p>
            <button className="mt-4 bg-red-600 px-4 py-2 rounded" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
