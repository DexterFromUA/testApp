import {createContext, Dispatch, SetStateAction} from 'react';

export interface State {
  filter: number[];
}

export interface MainContextInterface {
  readonly state: State;
  readonly setState: Dispatch<SetStateAction<State>>;
}

export const MainState = createContext<MainContextInterface>(
  {} as MainContextInterface,
);
