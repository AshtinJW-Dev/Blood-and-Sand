export default function Battle() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">⚔️ Battle Arena</h1>
        <p className="mt-2 text-gray-300">Enter the arena and fight for glory.</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-300 p-4 rounded">🏟️ Select Arena</div>
          <div className="bg-gray-300 p-4 rounded">⚔️ Choose Opponent</div>
        </div>
        <button className="mt-6 bg-red-600 px-6 py-3 rounded">Start Battle</button>
      </div>
    );
  }
  