import { useState } from 'react';
import { Language } from '../types/chatbot';

interface StudentInfoFormProps {
  onSubmit: (name: string, email: string) => void;
  onSkip: () => void;
  language: Language;
}

export function StudentInfoForm({ onSubmit, onSkip, language }: StudentInfoFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const translations = {
    english: {
      title: 'Welcome to College Chatbot',
      subtitle: 'Help us serve you better',
      nameLabel: 'Your Name (Optional)',
      emailLabel: 'Your Email (Optional)',
      submit: 'Start Chat',
      skip: 'Continue as Guest'
    },
    hindi: {
      title: 'कॉलेज चैटबॉट में आपका स्वागत है',
      subtitle: 'हमें आपकी बेहतर सेवा करने में मदद करें',
      nameLabel: 'आपका नाम (वैकल्पिक)',
      emailLabel: 'आपका ईमेल (वैकल्पिक)',
      submit: 'चैट शुरू करें',
      skip: 'अतिथि के रूप में जारी रखें'
    },
    marathi: {
      title: 'कॉलेज चॅटबॉटमध्ये आपले स्वागत आहे',
      subtitle: 'आम्हाला तुमची चांगली सेवा करण्यात मदत करा',
      nameLabel: 'तुमचे नाव (पर्यायी)',
      emailLabel: 'तुमचा ईमेल (पर्यायी)',
      submit: 'चॅट सुरू करा',
      skip: 'अतिथी म्हणून सुरू ठेवा'
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h2>
        <p className="text-gray-600 mb-6">{t.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.nameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.emailLabel}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t.submit}
            </button>
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              {t.skip}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
