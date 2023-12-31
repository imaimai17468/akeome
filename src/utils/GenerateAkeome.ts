import { akeome } from '@/constants/akeome.const';
import { AkeomeKeys } from '@/types/Akeome.types';

export const GenerateAkeome = (language: AkeomeKeys) => {
  const akeomeMessage = akeome[language];
  return akeomeMessage;
};
