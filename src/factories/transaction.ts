import faker from "@faker-js/faker";
import { Factory } from "fishery";
import ObjectID from "bson-objectid";
import Transaction from "../types/transaction";

const getTransaction = (blank = false) => ({
  id: blank ? "" : ObjectID().toHexString(),
  description: blank ? "" : faker.name.findName(),
  quantity: blank ? 0 : faker.datatype.number(),
  balance: blank ? 0 : faker.datatype.number(),
  category: {
    id: blank ? "" : ObjectID().toHexString(),
    name: blank ? "" : faker.name.findName(),
    icon: blank ? "" : faker.name.findName(),
  },
  tags: blank
    ? []
    : [
        {
          id: ObjectID().toHexString(),
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
