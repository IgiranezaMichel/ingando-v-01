import {createContext, useContext} from 'react';
import {ModalContextType} from '../types/modalContextType';

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);
export const useModalContext = () => {
  const modal = useContext(ModalContext);
  if (modal === undefined) {
    throw Error('No data found');
  }
  return modal;
};
