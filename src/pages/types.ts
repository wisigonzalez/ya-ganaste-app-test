export interface BanksProps {
  navigation: any;
  banks?: Array<{
    age: number;
    url: string;
    bankName: string;
    description: string;
  }>;
  incomes?: number;
}

export type BanksType = {
  age: number;
  url: string;
  bankName: string;
  description: string;
};

export interface BanksDetailsProps {
  navigation: any;
  bank: {
    age: number;
    url: string;
    bankName: string;
    description: string;
  };
}
