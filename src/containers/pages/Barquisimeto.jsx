import React, { useState } from 'react';
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import WhatsAppButton from "components/home/WhatsAppButton";
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

function Barquisimeto() {
  const [activeTab, setActiveTab] = useState(sedesTabs[0].id);

  return (
    <Layout>
      <Navbar />
      <div className="pt-20 bg-slate-50 min-h-screen">
        <CTA />

        {/* Tabs Navigation */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-8">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">Selecciona una sede</label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 shadow-sm"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {sedesTabs.map((tab) => (
                <option key={tab.id} value={tab.id}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4 justify-center bg-white p-2 rounded-2xl shadow-sm ring-1 ring-slate-100" aria-label="Tabs">
              {sedesTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300
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
        </div>

        {/* Tab Content with Animation */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 overflow-hidden">
          <div className="relative animate-fade-in-up bg-white rounded-3xl shadow-premium ring-1 ring-slate-100 overflow-hidden">
            {sedesTabs.find(t => t.id === activeTab)?.component}
          </div>
        </div>

        <WhatsAppButton />
      </div>
      <Footer />
    </Layout>
  );
}

export default Barquisimeto;