/**
 * 两条产品线的元数据。本体在 products.json（后台可编辑）。
 */

import raw from "./products.json";

export type ProductKey = "kde" | "i3";
export type ProductStatus = "active" | "archived";

export interface Product {
  key: ProductKey;
  name: string;
  shortName: string;
  versionLabel: string;
  status: ProductStatus;
  repo: string;
  fullName: string;
  githubUrl: string;
  issuesUrl: string;
  tagline: string;
  forWhom: string;
  notForWhom: string;
  desktop: string;
  baseSystem: string;
  highlights: string[];
}

export const PRODUCTS = raw.PRODUCTS as Record<ProductKey, Product>;

export const PRODUCT_LIST: Product[] = [PRODUCTS.kde, PRODUCTS.i3];
