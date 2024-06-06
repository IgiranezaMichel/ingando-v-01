/* eslint-disable react/react-in-jsx-scope */

import {ReactNode, createContext, useContext, useEffect, useState} from 'react';
interface DataState {
  currentState: any;
  updateState: React.Dispatch<React.SetStateAction<any>>;
}
export const LoginContext = createContext<DataState | undefined>(undefined);
const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

const LoginProvider = (props: {children: ReactNode}) => {
  const [currentState, setUpdateState] = useState<any>({});
  useEffect(() => {}, []);
  const data: DataState = {
    currentState: currentState,
    updateState: function (value: any): void {
      setUpdateState(value);
    },
  };
  return (
    <LoginContext.Provider value={data}>{props.children}</LoginContext.Provider>
  );
};
export {LoginProvider, useLoginContext};
