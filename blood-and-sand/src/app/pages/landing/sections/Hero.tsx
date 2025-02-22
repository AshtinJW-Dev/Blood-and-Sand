export default function Hero() {
  return (
    <div 
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('/assets/landing/bas_banner.jpg')" }}
    >
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          ⚔️ Blood & Sand
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Train your gladiators, build your Ludus, and fight for glory in the Colosseum!
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a href="/pages/battle" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-lg font-semibold rounded-lg transition">
            Enter the Arena
          </a>
          <a href="/pages/ludus" className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-lg font-semibold rounded-lg transition">
            Manage Your Ludus
          </a>
        </div>
      </div>
    </div>
  );
}
