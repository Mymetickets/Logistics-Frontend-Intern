export const transportationCategories = [
  {
    id: '1',
    name: 'Road',
    description: 'Travel by vehicles on roads.',
    slug: 'road',
    status: 'active',
  },
  {
    id: '2',
    name: 'Rail',
    description: 'Travel using trains on tracks.',
    slug: 'rail',
    status: 'active',
  },
  {
    id: '3',
    name: 'Air',
    description: 'Travel by airplanes or helicopters.',
    slug: 'air',
    status: 'active',
  },
  {
    id: '4',
    name: 'Water',
    description: 'Travel by boats or ships.',
    slug: 'water',
    status: 'active',
  },
  {
    id: '6',
    name: 'Space',
    description: 'Travel beyond Earth.',
    slug: 'space',
    status: 'inactive',
  },
];

export const transportModes = [
  {
    id: 1,
    name: 'Intercity Bus',
    description: 'Bus service between cities and towns.',
    category: 'Road',
    status: 'active',
  },
  {
    id: 2,
    name: 'Taxi',
    description: 'Private road transport service.',
    category: 'Road',
    status: 'active',
  },
  {
    id: 3,
    name: 'Freight Train',
    description: 'Rail transport for goods and cargo.',
    category: 'Rail',
    status: 'active',
  },
  {
    id: 4,
    name: 'Passenger Train',
    description: 'Rail service for passengers.',
    category: 'Rail',
    status: 'active',
  },
  {
    id: 5,
    name: 'Domestic Flight',
    description: 'Air travel within a country.',
    category: 'Air',
    status: 'active',
  },
  {
    id: 6,
    name: 'International Flight',
    description: 'Air travel between countries.',
    category: 'Air',
    status: 'active',
  },
  {
    id: 7,
    name: 'Ferry',
    description: 'Boat service for passengers and vehicles.',
    category: 'Water',
    status: 'active',
  },
  {
    id: 8,
    name: 'Cargo Ship',
    description: 'Large ship used for transporting goods.',
    category: 'Water',
    status: 'active',
  },

  {
    id: 10,
    name: 'Space Shuttle',
    description: 'Vehicle for space travel and transport.',
    category: 'Space',
    status: 'inactive',
  },
];
