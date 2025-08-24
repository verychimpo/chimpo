
import React from 'react';
import { NAVIGATION_LINKS, COMPANY_PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ALCS株式会社</h3>
            <p className="text-sm">{COMPANY_PROFILE.address}</p>
            <p className="text-sm mt-2">Phone: {COMPANY_PROFILE.phone}</p>
            <p className="text-sm mt-2">Email: {COMPANY_PROFILE.email}</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors duration-300 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Placeholder for social or other info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">フォローする</h3>
            <p className="text-sm">ソーシャルメディアリンクは準備中です。</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} ALCS Co.,Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
