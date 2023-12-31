import { akeome, languageList } from "@/constants/akeome.const";
import { AkeomeKeys } from "@/types/Akeome.types";

export const RandomlyGenerateAkeome = () => {
  const randomIndex = Math.floor(Math.random() * languageList.length);
  const randomLanguage = languageList[randomIndex] as AkeomeKeys;
  const akeomeMessage = akeome[randomLanguage];
  return akeomeMessage;
};
