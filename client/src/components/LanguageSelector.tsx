import { Language } from '../types/chatbot';
import { Languages } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const languages: { value: Language; label: string; nativeLabel: string }[] = [
    { value: 'english', label: 'English', nativeLabel: 'English' },
    { value: 'hindi', label: 'Hindi', nativeLabel: 'हिंदी' },
    { value: 'marathi', label: 'Marathi', nativeLabel: 'मराठी' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Languages size={18} className="text-gray-500" />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.nativeLabel}
          </option>
        ))}
      </select>
    </div>
  );
}
