import faker from "@faker-js/faker";
import { Factory } from "fishery";
import Transaction from "../types/transaction";

const mongoId = () =>
  ((s = (n: number) => Math.floor(n).toString(16)) =>
    s(Date.now() / 1000) +
    " ".repeat(16).replace(/./g, () => s(Math.random() * 16)))();

const getTransaction = (blank = false) => ({
  id: blank ? "" : mongoId(),
  description: blank ? "" : faker.name.findName(),
  quantity: blank ? 0 : faker.datatype.number(),
  balance: blank ? 0 : faker.datatype.number(),
  category: {
    id: blank ? "" : mongoId(),
    name: blank ? "" : faker.name.findName(),
    icon: blank ? "" : faker.name.findName(),
  },
  tags: blank
    ? []
    : [
        {
          id: mongoId(),
          name: faker.name.findName(),
        },
      ],
  date: blank ? new Date() : faker.date.recent(10),
});

const transactionFactory = Factory.define<Transaction>(() => getTransaction());

export const randomTransaction = (): Transaction => transactionFactory.build();
export const randomTransactions = (total = 2): Transaction[] =>
  transactionFactory.buildList(total);
export const blankTransaction = (): Transaction => getTransaction(true);
