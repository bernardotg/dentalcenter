import React, { useState } from 'react';
import CTA from "components/ubi_barquisimeto/CTA";
import Features from "components/ubi_barquisimeto/Features";
import Features2 from "components/ubi_barquisimeto/Features2";
import Features3 from "components/ubi_barquisimeto/Features3";
import Features4 from "components/ubi_barquisimeto/Features4";

const sedesTabs = [
  { id: 'este', name: 'Sede Este (Rio Lama)', component: <Features /> },
  { id: 'kids', name: 'Sede Este Kids', component: <Features2 /> },
  { id: 'anticanceroso', name: 'Sede Anticanceroso', component: <Features3 /> },
  { id: 'centro', name: 'Sede Centro', component: <Features4 /> },
];

function SedesTabs() {
  const [activeTab, setActiveTab] = useState(sedesTabs[0].id);

  return (
    <div className="bg-slate-50 py-12">
      <CTA />

      {/* Tabs Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white p-2 rounded-2xl shadow-sm ring-1 ring-slate-100" aria-label="Tabs">
          {sedesTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-primary-500 text-white shadow-md transform scale-105' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}
              `}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content with Animation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 overflow-hidden">
        <div className="relative animate-fade-in-up bg-white rounded-3xl shadow-premium ring-1 ring-slate-100 overflow-hidden">
          {sedesTabs.find(t => t.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
}

export default SedesTabs;
