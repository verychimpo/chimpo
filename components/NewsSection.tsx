
import React from 'react';
import { NEWS_ARTICLES } from '../constants';
import type { NewsArticle } from '../types';

const NewsItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <li className="flex flex-col sm:flex-row items-start sm:items-center py-4 space-y-2 sm:space-y-0 sm:space-x-6">
    <div className="flex items-center space-x-4">
      <time className="font-medium text-slate-500">{article.date}</time>
      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
        article.category === 'お知らせ' ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-800'
      }`}>
        {article.category}
      </span>
    </div>
    <p className="text-slate-700 hover:text-sky-600 transition-colors duration-300 cursor-pointer">
      {article.title}
    </p>
  </li>
);

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">What's New</h2>
          <p className="text-slate-500 mt-2">最新のお知らせ</p>
          <div className="mt-4 w-24 h-1 bg-sky-500 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="divide-y divide-slate-200">
            {NEWS_ARTICLES.map((article, index) => (
              <NewsItem key={index} article={article} />
            ))}
          </ul>
          <div className="text-center mt-10">
            <button className="bg-transparent hover:bg-sky-500 text-sky-600 font-semibold hover:text-white py-2 px-6 border border-sky-500 hover:border-transparent rounded-full transition-all duration-300">
              過去のお知らせ一覧
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
