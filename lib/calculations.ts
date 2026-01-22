export function daysSinceQuit(quitDate: Date): number {
  const now = new Date();
  return Math.floor((now.getTime() - quitDate.getTime()) / 86400000);
}

export function moneySaved(days: number, costPerDay: number): number {
  return days * costPerDay;
}

export function cigarettesAvoided(days: number, perDay: number): number {
  return days * perDay;
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

  
}
