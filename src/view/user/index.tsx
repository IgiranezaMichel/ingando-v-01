import React, {useState} from 'react';
import {ModalContext} from '../../context/modalContext';
import {Home} from './camp';

export const Index = () => {
  const [isModalVisible, setIsVisible] = useState(false);
  const setIsModalVisible = (visible: boolean) => {
    setIsVisible(visible);
  };
  return (
    <ModalContext.Provider value={{isModalVisible, setIsModalVisible}}>
      <Home />
    </ModalContext.Provider>
  );
};
