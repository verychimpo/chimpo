
import React from 'react';

const RecruitmentSection: React.FC = () => {
  return (
    <section id="recruit" className="relative py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1200/400?grayscale')" }}>
      <div className="absolute inset-0 bg-slate-800 opacity-70"></div>
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold">採用情報</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          未来を共に創る仲間を募集しています。あなたの情熱とスキルで、新しい価値を創造しませんか？
        </p>
        <div className="mt-10">
          <button className="bg-white hover:bg-slate-200 text-sky-600 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            エントリーはこちら
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
