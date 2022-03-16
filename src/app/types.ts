import {NavigationProp} from '@react-navigation/core/src/types';

export interface Character {
  appearance: number[];
  better_call_saul_appearance: any[];
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: string[];
  portrayed: string;
  status: string;
}

interface Params {
  Home: undefined;
  Detail: {
    item: Character;
  };
  Filter: undefined;
}

export type NavigationProps<T extends keyof Params> = NavigationProp<Params, T>;
