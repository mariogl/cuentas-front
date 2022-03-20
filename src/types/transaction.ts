interface Transaction {
  id: string;
  description: string;
  quantity: number;
  balance: number;
  category: {
    id: string;
    name: string;
    icon: string;
  };
  tags: { id: string; name: string }[];
  date: Date;
}

export default Transaction;
