import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface ModalContextProps {
  isModalOpened: boolean;
  setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = React.createContext<ModalContextProps | null>(null);

export function ModalContextProvider<T>({ children }: PropsWithChildren<T>) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext can only be used inside ModalContextProvider');
  }
  return context;
}
