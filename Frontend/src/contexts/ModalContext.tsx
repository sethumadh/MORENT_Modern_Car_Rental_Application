import { createContext, useContext, useState } from "react";

import { VoidFunction, useStateSetter, ContextProps } from '../types/index';

type ContextObjectValue = {
  isOpen: boolean;
  setIsOpen: useStateSetter<boolean> | VoidFunction;
  toggleModal: VoidFunction;
};

const Context = createContext<ContextObjectValue>({} as ContextObjectValue);

export const ModalContext = ({ children }: ContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal: VoidFunction = (): void => {
    setIsOpen((prevVal: boolean) => !prevVal);
  };

  const defaultContextObject: ContextObjectValue = {
    isOpen,
    setIsOpen,
    toggleModal,
  };

  return (
    <Context.Provider
      value={defaultContextObject}>
      {children}
    </Context.Provider>
  )
}

export const useModalContext = () => useContext(Context);

