import {createContext, useContext} from 'react';
import {ResponseData} from '../types/responseData';

export const AccountHolderContext = createContext<ResponseData | undefined>(
  undefined,
);
export const useAccountHolderContext = () => {
  const account = useContext(AccountHolderContext);
  if (account === undefined) {
    throw new Error('Usr not found');
  }
  return account;
};
