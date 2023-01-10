import { createContext, useContext, useState } from "react";

import { VoidFunction, ContextProps } from '../types/index';

type ContextObjectValue = {
  openMenu: boolean;
  openMenu2: boolean;
  openMenu3: boolean;
  openMenu4: boolean;
  handleOpenMenu:  VoidFunction;
  handleOpenMenu2:  VoidFunction;
  handleOpenMenu3:  VoidFunction;
  handleOpenMenu4:  VoidFunction;
};

const Context = createContext<ContextObjectValue>({} as ContextObjectValue);

export const DropDownContext = ({ children }: ContextProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [openMenu4, setOpenMenu4] = useState(false);

  const handleOpenMenu: VoidFunction = (): void => {
    setOpenMenu((prevValue: boolean) => !prevValue);
  }

  const handleOpenMenu2: VoidFunction = (): void => {
    setOpenMenu2((prevValue: boolean) => !prevValue);
  }

  const handleOpenMenu3: VoidFunction = (): void => {
    setOpenMenu3((prevValue: boolean) => !prevValue);
  }

  const handleOpenMenu4: VoidFunction = (): void => {
    setOpenMenu4((prevValue: boolean) => !prevValue);
  }

  const defaultContextObject: ContextObjectValue = {
    openMenu,
    openMenu2,
    openMenu3,
    openMenu4,
    handleOpenMenu,
    handleOpenMenu2,
    handleOpenMenu3,
    handleOpenMenu4,
  };

  return (
    <Context.Provider
      value={defaultContextObject}>
      {children}
    </Context.Provider>
  )
}

export const useDropDownContext = () => useContext(Context);

