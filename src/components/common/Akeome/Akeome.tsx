import { RandomlyGenerateAkeome } from "@/utils/RandomlyGenerateAkeome";

export const Akeome = () => {
  const akeomeMessage = RandomlyGenerateAkeome();
  return (
    <h1 className="text-white text-8xl font-black animate-bounce">
      {akeomeMessage}
    </h1>
  );
};
