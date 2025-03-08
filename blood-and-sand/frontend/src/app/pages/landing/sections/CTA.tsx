// src/components/CTA.tsx
const CTA = () => {
    return (
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-16 text-center">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            {/* Inline SVG Icon */}
            <svg className="w-12 h-12 mb-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.5-5.5 1.42-1.42L10 12.17l4.08-4.09 1.42 1.42z" />
            </svg>
            <h2 className="text-3xl font-bold mb-2">Ready to Join the Battle?</h2>
            {/* Added subtitle */}
            <p className="text-xl mb-6 font-medium">Claim your power and rewrite your destiny.</p>
            <button className="bg-black text-white py-3 px-8 rounded-full text-lg hover:bg-gray-800 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTA;
