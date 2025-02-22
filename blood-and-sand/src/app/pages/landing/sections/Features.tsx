// src/components/Features.tsx
const Features = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Strategic Gameplay</h3>
              <p className="text-lg">Immerse yourself in a challenging and rewarding environment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Customizable Characters</h3>
              <p className="text-lg">Create and develop your character to fit your playstyle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Epic Battles</h3>
              <p className="text-lg">Engage in thrilling combat against other players.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  