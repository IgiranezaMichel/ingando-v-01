import {createContext, useContext} from 'react';
export type LogoutModalProps = {
  showLogoutModal: boolean;
  setShowLogoutModal: (showModal: boolean) => void;
};
export const LogoutContext = createContext<LogoutModalProps | undefined>(
  undefined,
);
export const useLogoutModal = () => {
  const modal = useContext(LogoutContext);
  if (modal === undefined) {
    throw new Error('Modal can not be null');
  }
  return modal;
};
