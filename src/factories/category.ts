import faker from "@faker-js/faker";
import { Factory } from "fishery";
import Category from "../types/category";

const mongoId = () =>
  ((s = (n: number) => Math.floor(n).toString(16)) =>
    s(Date.now() / 1000) +
    " ".repeat(16).replace(/./g, () => s(Math.random() * 16)))();

const getCategory = (blank = false) => ({
  id: blank ? "" : mongoId(),
  name: blank ? "" : faker.name.findName(),
  icon: blank ? "" : faker.name.firstName(),
});

const categoryFactory = Factory.define<Category>(() => getCategory());

export const randomCategory = (): Category => categoryFactory.build();
export const randomCategories = (total = 2): Category[] =>
  categoryFactory.buildList(total);
export const blankCategory = (): Category => getCategory(true);
