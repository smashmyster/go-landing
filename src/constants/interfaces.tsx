export interface IGeneralResponse {
  success: boolean;
  message?: string;
}
export interface ICategoryLine {
  id: number;
  name: string;
  image: string;
  products: Array<IProduct | undefined>;
}

export interface IGenericType {
  id?: number | string;
  name?: string;
  type?: string;
  category?: string;
}

export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  lowerPrice: number;
  upperPrice: number;
  packaging: Array<IPackaging>;
  variety: Array<IGenericType>;
}

export interface IPackaging {
  id: number;
  packaging: string;
}

export interface IListItems {
  name: string;
  list: Array<string>;
}

export {};
