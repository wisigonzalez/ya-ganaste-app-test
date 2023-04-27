export interface ListProps {
  navigation: any;
  data?: Array<{
    age: number;
    url: string;
    bankName: string;
    description: string;
  }>;
}

export interface ItemProps {
  item: {
    age: number;
    url: string;
    bankName: string;
    description: string;
  };
}
