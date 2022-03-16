import apiClient from '../config/apiConfig';
import {Character} from '../types';

const getCharacters = (): Promise<Character[]> => {
  return apiClient.get('characters');
};

export default getCharacters;
