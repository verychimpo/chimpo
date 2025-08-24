
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800">会社概要</h2>
        <p className="text-slate-500 mt-2">私たちについて</p>
        <div className="mt-4 w-24 h-1 bg-sky-500 mx-auto"></div>
        <p className="max-w-3xl mx-auto mt-8 text-slate-600 leading-relaxed">
          ALCS株式会社は、お客様のビジネス課題を解決するためのITパートナーです。システム開発から保守・運用、インフラ構築まで、幅広いサービスで企業の成長をサポートします。
        </p>
        <div className="mt-10">
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            詳しく見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
