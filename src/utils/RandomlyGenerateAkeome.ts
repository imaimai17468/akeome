import { akeome, languageList } from "@/constants/akeome"
import { AkeomeKeys } from "@/type/AkeomaKeys";

export const RandomlyGenerateAkeome = () => {
  const randomIndex = Math.floor(Math.random() * languageList.length);
  const randomLanguage = languageList[randomIndex] as AkeomeKeys;
  const akeomeMessage = akeome[randomLanguage];
  return akeomeMessage;
}
