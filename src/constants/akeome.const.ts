import { AkeomeKeys } from '@/types/Akeome.types';

export const akeome = {
  english: 'Happy new year!',
  french: 'Bonne Année!',
  spanish: '¡Feliz año nuevo!',
  german: 'Ein gutes neues Jahr!',
  italian: 'Felice anno nuovo!',
  portuguese: 'Feliz Ano Novo!',
  chinese: '新年好!',
  korean: '새해 복 많이 받으세요!!',
  thai: 'สวัสดีปีใหม่ ครับ/ค่ะ!',
  malay: 'Selamat Tahun Baru!',
  indonesian: 'Selamat Tahun Baru!',
  vietnamese: 'Chúc mừng năm mới!',
  turkish: 'Yeni yılınız kutlu olsun!',
  mongolian: 'Шинэ жилийн мэнд хургэе!',
  swahili: 'Heri Za mwaka mpya!',
  russian: 'С Новым годом!',
  danish: 'Godt nytår!',
  swedish: 'Gott nytt år!',
  norwegian: 'Godt nytt år!',
  finnish: 'Hyvää uutta vuotta!',
  dutch: 'Gelukkig Nieuwjaar!',
  japanese: 'あけおめ！',
};

export const languageList = Object.keys(akeome).sort() as AkeomeKeys[];
