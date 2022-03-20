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
  date: Date;
}

export default Transaction;
