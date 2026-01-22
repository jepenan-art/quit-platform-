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
