export interface NavLink {
  label: string;
  href: string;
}

export interface NewsArticle {
  date: string;
  category: string;
  title: string;
}

export interface Service {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}