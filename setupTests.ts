const mockData = [
  {
    age: 11,
    bankName: 'Banco 1',
    url: 'https://testimage.com',
    description: 'Banco 1 Es Para Todos',
  },
  {
    age: 22,
    bankName: 'Banco 2',
    url: 'https://testimage.com',
    description: 'Banco 2 Creando Oportunidades',
  },
];

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: mockData})),
}));

jest.mock('./src/providers', () => ({
  get: jest.fn(() => Promise.resolve({data: mockData})),
}));

jest.mock('@react-native-async-storage/async-storage', () => ({}));
