import { rest } from "msw";
import { randomCategories } from "../factories/category";
import { randomTransactions } from "../factories/transaction";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}categories`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        categories: randomCategories(3),
      })
    )
  ),
  rest.get(`${process.env.REACT_APP_API_URL}transactions`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        transactions: randomTransactions(2),
      })
    )
  ),
];
