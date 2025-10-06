import { useState } from 'react';
import { Conversation, Language, Message } from './types/chatbot';
import { ChatInterface } from './components/ChatInterface';
import { ConversationLogs } from './components/ConversationLogs';
import { LanguageSelector } from './components/LanguageSelector';
import { StudentInfoForm } from './components/StudentInfoForm';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Topics } from './components/Topics';
import { LanguageShowcase } from './components/LanguageShowcase';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { recognizeIntent, getGreeting } from './utils/intentRecognition';
import { MessageSquare, BarChart3 } from 'lucide-react';
import {Header} from "./components/Header";

type View = 'landing' | 'chat' | 'admin';

function App() {
  const [view, setView] = useState<View>('landing');
  const [language, setLanguage] = useState<Language>('english');
  const [showInfoForm, setShowInfoForm] = useState(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);

  const startConversation = (studentName?: string, studentEmail?: string) => {
    const newConversation: Conversation = {
      id: crypto.randomUUID(),
      messages: [],
      language,
      status: 'active',
      requiresHuman: false,
      startedAt: new Date(),
      studentName,
      studentEmail
    };

    const greetingMessage: Message = {
      id: crypto.randomUUID(),
      content: getGreeting(language),
      senderType: 'bot',
      timestamp: new Date(),
      language,
      intent: 'greeting',
      confidence: 1.0
    };

    newConversation.messages.push(greetingMessage);
    setCurrentConversation(newConversation);
    setConversations(prev => [...prev, newConversation]);
    setShowInfoForm(false);
  };

  const handleSendMessage = (content: string) => {
    if (!currentConversation) return;

    const studentMessage: Message = {
      id: crypto.randomUUID(),
      content,
      senderType: 'student',
      timestamp: new Date(),
      language
    };

    const intentResult = recognizeIntent(content, language);

    const botMessage: Message = {
      id: crypto.randomUUID(),
      content: intentResult.response,
      senderType: 'bot',
      timestamp: new Date(),
      language,
      intent: intentResult.intent,
      confidence: intentResult.confidence
    };

    const updatedConversation = {
      ...currentConversation,
      messages: [...currentConversation.messages, studentMessage, botMessage]
    };

    setCurrentConversation(updatedConversation);
    setConversations(prev =>
      prev.map(conv => conv.id === updatedConversation.id ? updatedConversation : conv)
    );
  };

  const handleRequestHumanSupport = () => {
    if (!currentConversation) return;

    const supportMessages: Record<Language, string> = {
      english: "I've escalated your query to our human support team. A staff member will assist you shortly. Please describe your issue in detail.",
      hindi: "मैंने आपके प्रश्न को हमारी मानव सहायता टीम तक पहुंचा दिया है। एक कर्मचारी जल्द ही आपकी सहायता करेगा। कृपया अपनी समस्या का विस्तार से वर्णन करें।",
      marathi: "मी तुमची चौकशी आमच्या मानवी सहाय्य टीमकडे पाठवली आहे. एक कर्मचारी लवकरच तुम्हाला मदत करेल. कृपया तुमची समस्या तपशीलवार वर्णन करा."
    };

    const systemMessage: Message = {
      id: crypto.randomUUID(),
      content: supportMessages[language],
      senderType: 'bot',
      timestamp: new Date(),
      language
    };

    const updatedConversation = {
      ...currentConversation,
      requiresHuman: true,
      status: 'escalated' as const,
      messages: [...currentConversation.messages, systemMessage]
    };

    setCurrentConversation(updatedConversation);
    setConversations(prev =>
      prev.map(conv => conv.id === updatedConversation.id ? updatedConversation : conv)
    );
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    if (currentConversation) {
      const langChangeMessages: Record<Language, string> = {
        english: "Language changed to English. How can I help you?",
        hindi: "भाषा हिंदी में बदल दी गई है। मैं आपकी कैसे मदद कर सकता हूं?",
        marathi: "भाषा मराठीमध्ये बदलली. मी तुम्हाला कशी मदत करू शकतो?"
      };

      const langMessage: Message = {
        id: crypto.randomUUID(),
        content: langChangeMessages[newLanguage],
        senderType: 'bot',
        timestamp: new Date(),
        language: newLanguage
      };

      const updatedConversation = {
        ...currentConversation,
        language: newLanguage,
        messages: [...currentConversation.messages, langMessage]
      };

      setCurrentConversation(updatedConversation);
      setConversations(prev =>
        prev.map(conv => conv.id === updatedConversation.id ? updatedConversation : conv)
      );
    }
  };

  const handleGetStarted = () => {
    setView('chat');
  };

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-white">
        <Header/>
        <Hero onGetStarted={handleGetStarted} />
        <Features />
        <HowItWorks />
        <Topics />
        <LanguageShowcase />
        <CTA onGetStarted={handleGetStarted} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setView('landing')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <MessageSquare className="text-blue-600" size={32} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">College Assistant</h1>
                <p className="text-xs text-gray-500">24/7 Multilingual Support</p>
              </div>
            </button>

            <div className="flex items-center gap-4">
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
              />

              <div className="flex gap-2">
                <button
                  onClick={() => setView('chat')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    view === 'chat'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <MessageSquare size={18} />
                  Chat
                </button>
                <button
                  onClick={() => setView('admin')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    view === 'admin'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <BarChart3 size={18} />
                  Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'chat' ? (
          showInfoForm ? (
            <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
              <StudentInfoForm
                onSubmit={(name, email) => startConversation(name, email)}
                onSkip={() => startConversation()}
                language={language}
              />
            </div>
          ) : currentConversation ? (
            <div className="bg-white rounded-xl shadow-lg h-[calc(100vh-200px)] overflow-hidden">
              <ChatInterface
                conversation={currentConversation}
                onSendMessage={handleSendMessage}
                onRequestHumanSupport={handleRequestHumanSupport}
                language={language}
              />
            </div>
          ) : null
        ) : (
          <ConversationLogs conversations={conversations} />
        )}
      </main>
    </div>
  );
}

export default App;
