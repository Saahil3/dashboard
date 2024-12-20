import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Statssec from './components/dashboard/Stats/Statssec.tsx';
import Section from './components/dashboard/Insights/section';
import OrdersTable from './components/dashboard/Orders/OrdersTable';
import { orderData } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="pl-16">
        <Navbar />
        <main className="p-6 border-gray-100 border-2 bg-white mt-[132px] m-10 rounded-[20px] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.06)] font-inter">
          <Statssec />
          <Section />
          <div className="mb-6">
            <OrdersTable orders={orderData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;