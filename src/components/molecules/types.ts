export interface ListItemProps {
  item: {
    age: number;
    url: string;
    bankName: string;
    description: string;
  };
  handleOnPress: () => void;
}
