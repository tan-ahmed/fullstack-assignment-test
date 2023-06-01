import { createContext, useContext } from "react";
export type GlobalContent = {
  search: string;
  setSearch: (c: string) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  search: "", // set a default value
  setSearch: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
