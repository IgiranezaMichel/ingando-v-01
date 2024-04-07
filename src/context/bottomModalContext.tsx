import {createContext, useContext} from 'react';
import {ModalContextType} from '../types/modalContextType';

export const BottomContext = createContext<ModalContextType | undefined>(
  undefined,
);
export const useBottomContext = () => {
  const modal = useContext(BottomContext);
  if (modal === undefined) {
    throw new Error('cant be null');
  }
  return modal;
};
