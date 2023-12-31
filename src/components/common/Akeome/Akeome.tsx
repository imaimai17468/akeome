'use client';

import { useState, useEffect } from 'react';

import { AkeomeKeys } from '@/types/Akeome.types';
import { GenerateAkeome } from '@/utils/GenerateAkeome';

type AkeomeProps = {
  language: AkeomeKeys;
};

export const Akeome = ({ language }: AkeomeProps) => {
  const [akeomeMessage, setAkeomeMessage] = useState('');

  useEffect(() => {
    setAkeomeMessage(GenerateAkeome(language));
  }, [language]);

  return (
    <div className="flex flex-col items-center gap-4 text-6xl font-black text-white sm:text-8xl">
      <h1 className="z-10">{akeomeMessage}</h1>
      <h1 className="z-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        2024
      </h1>
    </div>
  );
};
