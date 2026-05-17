export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  hp: number;
  kmh: string;
  price: number;
  location: string;
  tone: string;
  ratings: { score: number; count: number };
  images?: string[];
}

export interface Category {
  id: string;
  label: string;
  count: number;
  tone: string;
}

export const featured: Car[] = [
  { id: '296-challenge', make: 'Ferrari', model: '296 Challenge', year: 2024, hp: 830, kmh: '2.9s', price: 1950, location: 'Hatfield', tone: 'graphite', ratings: { score: 5.0, count: 8 }, images: ['/front.jpg', '/side-left.jpg', '/side-right.jpg', '/rear.jpg', '/rear-left.jpg', '/rear-right.jpg'] },
  { id: 'gt', make: 'Bentley', model: 'Continental GT Speed', year: 2024, hp: 650, kmh: '3.5s', price: 1320, location: 'Knightsbridge', tone: 'sage', ratings: { score: 4.97, count: 22 } },
  { id: 'roma', make: 'Ferrari', model: 'Roma Spider', year: 2024, hp: 612, kmh: '3.4s', price: 1680, location: 'Belgravia', tone: 'crimson', ratings: { score: 5.0, count: 9 } },
  { id: 'ghost', make: 'Rolls-Royce', model: 'Ghost Extended', year: 2023, hp: 563, kmh: '4.8s', price: 1890, location: 'Mayfair', tone: 'pearl', ratings: { score: 5.0, count: 31 } },
  { id: 'turbo', make: 'Porsche', model: '911 Turbo S', year: 2024, hp: 640, kmh: '2.7s', price: 950, location: 'Chelsea', tone: 'silver', ratings: { score: 4.94, count: 47 } },
  { id: 'sl63', make: 'Mercedes-AMG', model: 'SL 63', year: 2024, hp: 577, kmh: '3.6s', price: 780, location: 'Notting Hill', tone: 'midnight', ratings: { score: 4.92, count: 18 } },
];

export const newArrivals: Car[] = [
  { id: 'huracan', make: 'Lamborghini', model: 'Huracán Tecnica', year: 2024, hp: 631, kmh: '3.2s', price: 1420, location: 'Park Lane', tone: 'sunburst', ratings: { score: 5.0, count: 6 } },
  { id: 'mc20', make: 'Maserati', model: 'MC20 Cielo', year: 2025, hp: 621, kmh: '2.9s', price: 1180, location: 'Kensington', tone: 'azure', ratings: { score: 5.0, count: 4 } },
  { id: 'mclaren', make: 'McLaren', model: 'GT', year: 2024, hp: 612, kmh: '3.2s', price: 1290, location: 'Mayfair', tone: 'storm', ratings: { score: 4.96, count: 12 } },
  { id: 'm8', make: 'BMW', model: 'M8 Competition', year: 2024, hp: 617, kmh: '3.0s', price: 640, location: 'Soho', tone: 'graphite', ratings: { score: 4.88, count: 28 } },
  { id: 'emira', make: 'Lotus', model: 'Emira V6 First Edition', year: 2024, hp: 400, kmh: '4.2s', price: 520, location: 'Shoreditch', tone: 'racing', ratings: { score: 4.95, count: 11 } },
  { id: 'taycan', make: 'Porsche', model: 'Taycan Turbo GT', year: 2025, hp: 1019, kmh: '2.2s', price: 880, location: 'Canary Wharf', tone: 'ice', ratings: { score: 5.0, count: 7 } },
  { id: 'urus', make: 'Lamborghini', model: 'Urus S', year: 2024, hp: 657, kmh: '3.5s', price: 1340, location: 'Hampstead', tone: 'storm', ratings: { score: 4.94, count: 15 } },
  { id: 'flying', make: 'Bentley', model: 'Flying Spur Hybrid', year: 2024, hp: 536, kmh: '4.1s', price: 1120, location: 'St James’s', tone: 'pearl', ratings: { score: 5.0, count: 9 } },
];

export const categories: Category[] = [
  { id: 'convertible', label: 'Convertible', count: 42, tone: 'sage' },
  { id: 'suv', label: 'SUV', count: 38, tone: 'storm' },
  { id: 'supercar', label: 'Supercar', count: 56, tone: 'crimson' },
  { id: 'classic', label: 'Classic', count: 24, tone: 'pearl' },
  { id: 'electric', label: 'Electric', count: 31, tone: 'ice' },
  { id: 'coupe', label: 'Coupe', count: 47, tone: 'graphite' },
];

export const CAR_TONES: Record<string, { bg: string; stripe: string; fg: string; accent: string }> = {
  graphite: { bg: '#2C2E33', stripe: '#373a40', fg: '#E8E7E2', accent: '#9aa0a6' },
  sage:     { bg: '#3A4438', stripe: '#43503F', fg: '#EDEAE0', accent: '#A8B19E' },
  crimson:  { bg: '#3A1E1E', stripe: '#451F1F', fg: '#F2E8E0', accent: '#C68A7E' },
  pearl:    { bg: '#D4CDBE', stripe: '#CCC4B2', fg: '#1A1816', accent: '#7E7669' },
  silver:   { bg: '#C9CCD0', stripe: '#BFC3C8', fg: '#1A1816', accent: '#727578' },
  midnight: { bg: '#1A1F2A', stripe: '#222732', fg: '#E8E8EC', accent: '#838B9B' },
  sunburst: { bg: '#B89456', stripe: '#AF8B4F', fg: '#1A1612', accent: '#5C4828' },
  azure:    { bg: '#2A3D52', stripe: '#33485E', fg: '#EAECEF', accent: '#92A6BB' },
  storm:    { bg: '#3F4347', stripe: '#484C50', fg: '#EAEAE6', accent: '#9CA0A4' },
  racing:   { bg: '#1F3328', stripe: '#243A2E', fg: '#E6E9E1', accent: '#90A595' },
  ice:      { bg: '#C9D3D7', stripe: '#BFCAD0', fg: '#0F1418', accent: '#566069' },
};
