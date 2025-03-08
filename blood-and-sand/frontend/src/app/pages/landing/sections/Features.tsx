// src/components/Features.tsx
import { Rocket, User, Zap } from 'lucide-react';

const Features = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center text-5xl text-blue-500 mb-4"><Rocket /></div>
              <h3 className="text-2xl font-semibold mb-4">Strategic Gameplay</h3>
              <p className="text-lg">Engage in thoughtful strategies in a challenging environment designed to reward creative play and tactical decisions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow ">
              <div className="flex justify-center items-center text-5xl text-green-500 mb-4"><User /></div>
              <h3 className="text-2xl font-semibold mb-4">Customizable Characters</h3>
              <p className="text-lg">Personalize your hero with a range of customization options to ensure your playstyle stands out in the arena.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center text-5xl text-red-500 mb-4"><Zap /></div>
              <h3 className="text-2xl font-semibold mb-4">Epic Battles</h3>
              <p className="text-lg">Experience adrenaline-pumping combat with fluid animations and dynamic battle mechanics that challenge your skills.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
