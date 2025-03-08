import { Heart, Sword, Shield, Bolt, Star, Flame, Award } from 'lucide-react';

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

interface GladiatorCardProps {
  gladiator: Gladiator;
  trainGladiator: (id: number, skill: string) => void;
  healGladiator: (id: number) => void;
  deleteGladiator: (id: number) => void;
}

const GladiatorCard: React.FC<GladiatorCardProps> = ({ gladiator, trainGladiator, healGladiator, deleteGladiator }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white text-center">
      <h3 className="text-2xl font-semibold mb-2">{gladiator.name}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-2 rounded-lg shadow-sm bg-gray-100">
          <p><Heart className="inline-block mr-2 text-red-500" />Health: {gladiator.health}</p>
        </div>
        <div className="border p-2 rounded-lg shadow-sm bg-gray-100">
          <p><Sword className="inline-block mr-2 text-blue-500" />Attack: {gladiator.attack}</p>
        </div>
        <div className="border p-2 rounded-lg shadow-sm bg-gray-100">
          <p><Shield className="inline-block mr-2 text-gray-500" />Defense: {gladiator.defense}</p>
        </div>
        <div className="border p-2 rounded-lg shadow-sm bg-gray-100">
          <p><Bolt className="inline-block mr-2 text-yellow-500" />Speed: {gladiator.speed}</p>
        </div>
        <div className="border p-2 rounded-lg shadow-sm bg-gray-100">
          <p><Star className="inline-block mr-2 text-green-500" />Level: {gladiator.level}</p>
        </div>
        <div className="border p-2 rounded-lg shadow-sm bg-gray-100">
          <p><Flame className="inline-block mr-2 text-orange-500" />Stamina: {gladiator.stamina}</p>
        </div>
        <div className="border p-2 rounded-lg shadow-sm bg-gray-100">
          <p><Award className="inline-block mr-2 text-purple-500" />Experience: {gladiator.experience}</p>
        </div>
        <div className="border p-2 rounded-lg shadow-sm bg-gray-100">
          <p className="text-gray-700">Special Ability: {gladiator.specialAbility ? 'Yes' : 'No'}</p>
        </div>
      </div>
      <div className='flex justify-between m-2'>
        <button
          onClick={() => trainGladiator(gladiator.id, 'attack')}
          className="bg-green-500 text-white px-4 py-2 m-1 rounded-md hover:bg-green-600"
        >
          Train Attack
        </button>
        <button
          onClick={() => trainGladiator(gladiator.id, 'defense')}
          className="bg-green-500 text-white px-4 py-2 m-1 rounded-md hover:bg-green-600"
        >
          Train Defense
        </button>
        <button
          onClick={() => trainGladiator(gladiator.id, 'speed')}
          className="bg-green-500 text-white px-4 py-2 m-1 rounded-md hover:bg-green-600"
        >
          Train Speed
        </button>
        <button
          onClick={() => healGladiator(gladiator.id)}
          className="bg-yellow-500 text-white px-4 py-2 m-1 rounded-md hover:bg-yellow-600"
        >
          Heal
        </button>
        <button
          onClick={() => deleteGladiator(gladiator.id)}
          className="bg-gray-500 text-white px-4 py-2 m-1 rounded-md hover:bg-gray-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GladiatorCard;
