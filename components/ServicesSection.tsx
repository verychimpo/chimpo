import React from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
      <div className="bg-sky-100 p-4 rounded-full mb-6">
        <IconComponent className="h-10 w-10 text-sky-500" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
      <p className="text-slate-500 leading-relaxed">{service.description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">事業内容</h2>
          <p className="text-slate-500 mt-2">お客様のビジネスを加速させるITソリューション</p>
          <div className="mt-4 w-24 h-1 bg-sky-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;