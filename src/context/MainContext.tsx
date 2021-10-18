import React, { ReactChild, ReactChildren } from "react";
import { Assets } from "interface/assets";
import { createContext, Dispatch, SetStateAction } from "react";
import UseSearch from "hooks/useSearch";

export type MainContextProps = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  dataAssets: Assets[];
  setDataAssets: Dispatch<SetStateAction<Assets[]>>;
  owner: string;
  setOwner: Dispatch<SetStateAction<string>>;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  offsetBase: number;
  setOffsetBase: Dispatch<SetStateAction<number>>;
  endOfList: boolean;
  setEndOfList: Dispatch<SetStateAction<boolean>>;
  loadCallsUpdate: () => void;
  dataAssetsOwner: Assets[];
  setDataAssetsOwner: Dispatch<SetStateAction<Assets[]>>;
};
export const MainContext = createContext<MainContextProps>({
  loading: false,
  setLoading: () => {},
  dataAssets: [],
  setDataAssets: () => {},
  owner: "",
  setOwner: () => {},
  offset: 0,
  setOffset: () => {},
  offsetBase: 0,
  setOffsetBase: () => {},
  endOfList: false,
  setEndOfList: () => {},
  loadCallsUpdate: () => {},
  dataAssetsOwner: [],
  setDataAssetsOwner: () => {},
});

interface MainContextProviderProps {
  children: ReactChild | ReactChildren;
}

export const MainContextProvider: React.FC<MainContextProviderProps> = ({
  children,
}: MainContextProviderProps) => {
  const {
    loading,
    setLoading,
    dataAssets,
    setDataAssets,
    owner,
    setOwner,
    offset,
    setOffset,
    offsetBase,
    setOffsetBase,
    loadCallsUpdate,
    endOfList,
    setEndOfList,
    dataAssetsOwner,
    setDataAssetsOwner,
  } = UseSearch();

  return (
    <MainContext.Provider
      value={{
        loading,
        setLoading,
        dataAssets,
        setDataAssets,
        owner,
        setOwner,
        offset,
        setOffset,
        offsetBase,
        setOffsetBase,
        loadCallsUpdate,
        endOfList,
        setEndOfList,
        dataAssetsOwner,
        setDataAssetsOwner,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
