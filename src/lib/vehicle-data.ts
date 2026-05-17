export interface VehicleDetail {
  id: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  bodyType: string;
  hp: number;
  kmh0to100: string;
  topSpeed: number;
  transmission: string;
  drivetrain: string;
  seats: number;
  fuel: string;
  doors: number;
  price: number;
  originalPrice: number;
  saving: number;
  images: string[];
  modelUrl: string;
  trip: { start: { date: string; time: string }; end: { date: string; time: string }; days: number };
  location: { neighborhood: string; city: string; area: string; postcode: string; delivery: string };
  ratings: {
    score: number;
    count: number;
    breakdown: [string, number][];
  };
  host: { name: string; initials: string; trips: number; joined: string; responseRate: number; responseTime: string; allStar: boolean; tone: string };
  photos: number;
  features: { group: string; items: string[] }[];
  included: { group: string; items: [string, string][] }[];
  rules: [string, string][];
  reviews: { initials: string; name: string; date: string; score: number; body: string }[];
  insurance: { provider: string; cover: string; excess: string };
  distance: { included: number; unit: string; overageFee: number };
  similar: { id: string; make: string; model: string; year: number; hp: number; kmh: string; price: number; location: string; tone: string; ratings: { score: number; count: number } }[];
}

export const vehicleData: VehicleDetail = {
  id: '296-challenge',
  make: 'Ferrari',
  model: '296 Challenge',
  trim: 'Race Series · Nero Livery',
  year: 2024,
  bodyType: 'Coupe · Race Car',
  hp: 830,
  kmh0to100: '2.9s',
  topSpeed: 330,
  transmission: 'F1 DCT',
  drivetrain: 'Rear-wheel drive',
  seats: 2,
  fuel: 'Petrol · V6 Twin-Turbo Hybrid',
  doors: 2,
  price: 1950,
  originalPrice: 2200,
  saving: 250,
  images: [
    '/front.jpg',
    '/side-left.jpg',
    '/side-right.jpg',
    '/rear.jpg',
    '/rear-left.jpg',
    '/rear-right.jpg',
  ],
  modelUrl: '/ferrari.glb',
  trip: {
    start: { date: 'Thu, 28 May', time: '09:00' },
    end: { date: 'Sun, 31 May', time: '18:00' },
    days: 3,
  },
  location: {
    neighborhood: 'Hatfield',
    city: 'Hertfordshire',
    area: 'AL10',
    postcode: 'AL10 9TF',
    delivery: 'Within M25 included',
  },
  ratings: {
    score: 5.0,
    count: 8,
    breakdown: [
      ['Cleanliness', 5.0],
      ['Maintenance', 5.0],
      ['Communication', 4.98],
      ['Convenience', 4.95],
      ['Accuracy', 5.0],
    ],
  },
  host: {
    name: 'H.R. Owen Ferrari',
    initials: 'HR',
    trips: 86,
    joined: 'March 2024',
    responseRate: 100,
    responseTime: 'within the hour',
    allStar: true,
    tone: 'crimson',
  },
  photos: 6,
  features: [
    {
      group: 'Performance',
      items: [
        '830 hp V6 twin-turbo hybrid powertrain',
        'Race-calibrated F1 DCT gearbox',
        'Carbon-ceramic racing brakes (398mm front / 360mm rear)',
        'Adjustable rear wing with DRS activation',
        'Lightweight forged aluminium centre-lock wheels',
        'Race-tuned Ohlins adjustable dampers',
      ],
    },
    {
      group: 'Race Systems',
      items: [
        'ABS Evo track-optimised anti-lock braking',
        'E-Diff3 electronic differential',
        'Side-slip angle control system (SSC)',
        'Manettino 5-position drive mode selector',
        'Motorsport-grade telemetry and data logging',
        'Quick-release Sabelt steering wheel with integrated controls',
      ],
    },
    {
      group: 'Cabin',
      items: [
        'FIA-homologated carbon fibre racing seat',
        'Six-point Sabelt racing harness',
        'Carbon fibre dashboard with digital race display',
        'Alcantara-trimmed steering wheel and surfaces',
        'Integrated roll cage with FIA certification',
        'Fire suppression system with cockpit pull handle',
      ],
    },
    {
      group: 'Safety',
      items: [
        'FIA-certified roll cage structure',
        'Onboard fire extinguisher system',
        'HANS device-compatible seat mounting',
        'Reinforced carbon-kevlar side intrusion panels',
        'Fuel cell with FIA-approved safety bladder',
        'Rear-view camera with pit lane assist',
      ],
    },
  ],
  included: [
    {
      group: 'Convenience',
      items: [
        ['Delivery & collection', 'Vehicle delivered and collected from your chosen location within the M25 at no extra charge'],
        ['Track day briefing', 'Comprehensive vehicle walkthrough and track orientation with an experienced race engineer'],
        ['Telemetry review', 'Post-session data analysis and driving feedback from the host team'],
      ],
    },
    {
      group: 'Peace of mind',
      items: [
        ['Roadside support', '24/7 dedicated support line with rapid response race technician on standby'],
        ['Bespoke motor insurance', 'Hiscox comprehensive cover included with £20m third-party liability'],
        ['Mechanical warranty', 'Full mechanical coverage for the duration of your rental, including hybrid systems'],
      ],
    },
  ],
  rules: [
    ['Valid race licence required', 'Drivers must hold a current ARDS, national, or international race licence to operate this vehicle on track'],
    ['Helmet and suit mandatory', 'FIA-approved helmet, race suit, gloves, and boots must be worn at all times during track sessions'],
    ['No road use permitted', 'This vehicle is not road-registered; transport to and from the circuit is arranged by the host team'],
    ['Pre-drive inspection', 'A mandatory vehicle inspection and sign-off with the race engineer is required before each session'],
  ],
  reviews: [
    {
      initials: 'JW',
      name: 'James W.',
      date: 'March 2026',
      score: 5.0,
      body: 'Absolutely phenomenal experience. The 296 Challenge is a pure-bred race car and it shows from the moment you fire it up. The hybrid system delivers instant torque and the braking is otherworldly. H.R. Owen had everything perfectly prepared and the race engineer was incredibly helpful with setup.',
    },
    {
      initials: 'RM',
      name: 'Rachael M.',
      date: 'January 2026',
      score: 5.0,
      body: 'Worth every penny. The car was immaculate and the team at H.R. Owen were professional throughout. The telemetry debrief after my session was a brilliant touch. I shaved two seconds off my lap time after their coaching. Cannot recommend this highly enough.',
    },
    {
      initials: 'DP',
      name: 'David P.',
      date: 'February 2026',
      score: 4.9,
      body: 'Having driven several GT3-class cars, the 296 Challenge is in a league of its own. The downforce at speed is remarkable and the DCT shifts are instantaneous. Delivery and collection was seamless and the whole process felt premium from start to finish.',
    },
  ],
  insurance: {
    provider: 'Hiscox Bespoke Motor',
    cover: '£20m third-party',
    excess: '£5,000 reducible to £1,000',
  },
  distance: {
    included: 150,
    unit: 'miles',
    overageFee: 2.50,
  },
  similar: [
    {
      id: 'gt',
      make: 'Bentley',
      model: 'Continental GT Speed',
      year: 2024,
      hp: 650,
      kmh: '3.5s',
      price: 1320,
      location: 'Knightsbridge',
      tone: 'sage',
      ratings: { score: 4.97, count: 22 },
    },
    {
      id: 'roma',
      make: 'Ferrari',
      model: 'Roma Spider',
      year: 2024,
      hp: 612,
      kmh: '3.4s',
      price: 1680,
      location: 'Belgravia',
      tone: 'crimson',
      ratings: { score: 5.0, count: 9 },
    },
    {
      id: 'mclaren',
      make: 'McLaren',
      model: 'GT',
      year: 2024,
      hp: 612,
      kmh: '3.2s',
      price: 1290,
      location: 'Mayfair',
      tone: 'storm',
      ratings: { score: 4.96, count: 12 },
    },
    {
      id: 'ghost',
      make: 'Rolls-Royce',
      model: 'Ghost Extended',
      year: 2023,
      hp: 563,
      kmh: '4.8s',
      price: 1890,
      location: 'Mayfair',
      tone: 'pearl',
      ratings: { score: 5.0, count: 31 },
    },
  ],
};
