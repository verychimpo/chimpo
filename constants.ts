import React from 'react';
import type { NavLink, NewsArticle, Service } from './types';
import { CodeBracketIcon, ServerStackIcon, WrenchScrewdriverIcon } from './components/Icons';


export const NAVIGATION_LINKS: NavLink[] = [
  { label: 'ホーム', href: '#home' },
  { label: '事業内容', href: '#services' },
  { label: 'お知らせ', href: '#news' },
  { label: '会社概要', href: '#about' },
  { label: '採用情報', href: '#recruit' },
  { label: 'AIアシスタント', href: '#ai-assistant' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
    { date: '2024.07.10', category: 'お知らせ', title: '夏季休業のお知らせ' },
    { date: '2024.05.20', category: 'プレスリリース', title: '新サービス「ALCS Cloud Platform」の提供を開始しました。' },
    { date: '2024.04.01', category: 'お知らせ', title: '2024年度入社式を執り行いました。' },
    { date: '2023.12.15', category: 'お知らせ', title: 'ウェブサイトをリニューアルしました。' },
];

export const SERVICES_DATA: Service[] = [
  {
    icon: CodeBracketIcon,
    title: 'システム開発',
    description: 'お客様のビジネスニーズに合わせた最適なシステムを、企画・設計から開発、導入まで一貫してサポートします。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'システム保守・運用',
    description: '稼働中のシステムの安定運用を支援し、障害対応や改善提案を通じて、お客様のビジネスの継続性を確保します。',
  },
  {
    icon: ServerStackIcon,
    title: 'IT基盤構築',
    description: 'サーバー、ネットワーク、クラウド環境の設計・構築を行い、堅牢でスケーラブルなITインフラを提供します。',
  },
];

export const COMPANY_PROFILE = {
    name: 'ALCS株式会社',
    address: '〒101-0025 東京都千代田区神田佐久間町3-21-4 ポ含ビル5F',
    phone: '03-5825-7100',
    email: 'info@alcs.co.jp'
};