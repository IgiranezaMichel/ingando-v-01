import {createContext, useContext} from 'react';
import {DataListApi} from '../types/dataListApi';

export const CampHistoryContext = createContext<DataListApi | undefined>(
  undefined,
);
export const useCampHistoryContext = () => {
  const camp = useContext(CampHistoryContext);
  if (camp === undefined) {
    throw new Error('Camp can not be null');
  }
  return camp;
};
