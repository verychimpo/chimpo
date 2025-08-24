
import React, { useState, useCallback } from 'react';
import { generateBusinessInquiryResponse } from '../services/geminiService';
import { SparklesIcon, PaperAirplaneIcon } from './Icons';

const GeminiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    setError('');

    try {
      const aiResponse = await generateBusinessInquiryResponse(query);
      setResponse(aiResponse);
    } catch (err) {
      setError('AIアシスタントからの応答取得中にエラーが発生しました。');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [query, isLoading]);

  return (
    <section id="ai-assistant" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center">
            <SparklesIcon className="h-8 w-8 text-sky-500 mr-3" />
            AI 事業内容アシスタント
          </h2>
          <p className="text-slate-500 mt-2">当社のサービスについて、AIに質問してみましょう。</p>
          <div className="mt-4 w-24 h-1 bg-sky-500 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="ai-query" className="block text-sm font-medium text-slate-700 mb-2">
              例：「クラウドを利用したインフラ構築はできますか？」
            </label>
            <div className="relative">
              <textarea
                id="ai-query"
                value={query}
                onChange={handleQueryChange}
                placeholder="こちらに質問を入力してください..."
                rows={3}
                className="w-full p-3 pr-20 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
                disabled={isLoading || !query.trim()}
                aria-label="Submit query"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <PaperAirplaneIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </form>

          {(isLoading || response || error) && (
            <div className="mt-6 p-4 bg-slate-50 rounded-md border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-2">AIからの回答:</h4>
              {isLoading && <p className="text-slate-500 animate-pulse">回答を生成中...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {response && <p className="text-slate-700 whitespace-pre-wrap">{response}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiAssistant;
