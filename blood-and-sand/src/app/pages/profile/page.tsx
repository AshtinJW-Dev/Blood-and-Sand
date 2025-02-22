export default function Profile() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">📜 Your Profile</h1>
        <p className="mt-2 text-gray-300">Track your progress and achievements.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-300 p-4 rounded">🏆 Rank & Achievements</div>
          <div className="bg-gray-300 p-4 rounded">💰 Gold & Resources</div>
        </div>
      </div>
    );
  }
  