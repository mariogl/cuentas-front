import faker from "@faker-js/faker";
import { Factory } from "fishery";
import ObjectID from "bson-objectid";
import Category from "../types/category";

const getCategory = (blank = false) => ({
  id: blank ? "" : ObjectID().toHexString(),
  name: blank ? "" : faker.name.findName(),
  icon: blank ? "" : faker.name.firstName(),
});

const categoryFactory = Factory.define<Category>(() => getCategory());

export const randomCategory = (): Category => categoryFactory.build();
export const randomCategories = (total = 2): Category[] =>
  categoryFactory.buildList(total);
export const blankCategory = (): Category => getCategory(true);
