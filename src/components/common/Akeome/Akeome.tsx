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
    <h1 className="animate-bounce text-6xl font-black text-white sm:text-8xl">{akeomeMessage}</h1>
  );
};
