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
  category: blank ? "" : mongoId(),
});

const transactionFactory = Factory.define<Transaction>(() => getTransaction());

export const randomTransaction = (): Transaction => transactionFactory.build();
export const randomTransactions = (total = 2): Transaction[] =>
  transactionFactory.buildList(total);
export const blankTransaction = (): Transaction => getTransaction(true);
