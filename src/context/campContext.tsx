import {createContext, useContext} from 'react';
import {DataListApi} from '../types/dataListApi';

export const CampContext = createContext<DataListApi | undefined>(undefined);
export const useCampContext = () => {
  const camp = useContext(CampContext);
  if (camp === undefined) {
    throw new Error('Camp can not be nulll');
  }
  return camp;
};
