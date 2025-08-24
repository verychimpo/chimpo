
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-sky-800 opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          確かな技術と信頼で、未来を創る。
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          私たちALCSは、先進的なITソリューションでお客様のビジネスを成功に導き、
          <br className="hidden md:block" />
          より豊かな社会の実現に貢献します。
        </p>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
