import { IMasterData } from "./masterData";

export interface IApp {
  [key: string]: any;
  masterData?: IMasterData;
}

export interface IAuth {
  [key: string]: any;
}

export interface ICart {
  [key: string]: any;
}

export type IAppContextProviderProps = {
  children: React.ReactNode;
};

export type IAppContext = {
  app?: IApp | any;
  setApp?: any;
  auth?: IAuth | any;
  setAuth?: any;
  cart?: ICart | any;
  setCart?: any;
};
