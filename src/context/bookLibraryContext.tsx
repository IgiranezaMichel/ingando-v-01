import {createContext, useContext} from 'react';
import {ResponseData} from '../types/responseData';

export const BookLibraryContext = createContext<ResponseData | undefined>(
  undefined,
);
export const useBookLibraryContext = () => {
  const library = useContext(BookLibraryContext);
  if (library === undefined) {
    throw new Error('Book has not to be undefined');
  }
  return library;
};
