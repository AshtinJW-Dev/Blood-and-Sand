export default function Market() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">🏪 Market</h1>
        <p className="mt-2 text-gray-300">Trade gladiators, weapons, and items.</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-300 p-4 rounded">🛡️ Weapons & Armor</div>
          <div className="bg-gray-300 p-4 rounded">🧑 Gladiator Exchange</div>
        </div>
      </div>
    );
  }
  