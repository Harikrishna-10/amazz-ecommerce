import { type SchemaTypeDefinition } from "sanity";
import { productType } from "./productType";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { orderType } from "./orderType";
import { salesType } from "./salesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    postType,
    authorType,
    orderType,
    blockContentType,
    categoryType,
    salesType,
  ],
};
