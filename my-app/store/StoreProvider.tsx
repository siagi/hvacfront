import * as React from 'react';
import { Store, useStore } from './Store';

const StoreContext = React.createContext<Store | null>(null);

export const StoreProvider = ({children}:any) => {

  return <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
};

export const useRootStore = () => React.useContext(StoreContext); 
