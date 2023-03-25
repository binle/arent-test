import React, { Dispatch } from 'react';
import { IApplicationContextData } from '../definitions';

export interface IAppContext {
  contextData: IApplicationContextData;
  setContextData: Dispatch<React.SetStateAction<IApplicationContextData>>;
}

export const defaultContext: IApplicationContextData = {};

export const ApplicationContext = React.createContext<IAppContext>({
  contextData: defaultContext,
  setContextData: () => {},
});
