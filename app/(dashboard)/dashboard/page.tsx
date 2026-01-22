export default function DashboardPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{{DASHBOARD_TITLE}}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">{{STAT_CARD}}</div>
          <div className="p-4 bg-white rounded shadow">{{STAT_CARD}}</div>
          <div className="p-4 bg-white rounded shadow">{{STAT_CARD}}</div>
        </div>
      </div>
    </main>
  );
}

import Navbar from './navbar';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-gray-50">
        ...
      </main>
    </>
  );
}
import { daysSinceQuit, moneySaved, cigarettesAvoided } from '@/lib/calculations';
import { useState } from 'react';

export default function DashboardPage() {
  const [quitDate] = useState(new Date('2026-01-01'));
  const [cigsPerDay] = useState(10);
  const [costPerPack] = useState(12);

  const days = daysSinceQuit(quitDate);
  const money = moneySaved(days, costPerPack);
  const avoided = cigarettesAvoided(days, cigsPerDay);

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">Days Quit: {days}</div>
          <div className="p-4 bg-white rounded shadow">Money Saved: ${money}</div>
          <div className="p-4 bg-white rounded shadow">Cigarettes Avoided: {avoided}</div>
        </div>
      </div>
    </main>
  );
}
