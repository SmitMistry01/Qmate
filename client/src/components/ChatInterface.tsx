import { useEffect, useRef } from 'react';
import { Conversation, Language, Message } from '../types/chatbot';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { HumanSupportButton } from './HumanSupportButton';
import { recognizeIntent } from '../utils/intentRecognition';

interface ChatInterfaceProps {
  conversation: Conversation;
  onSendMessage: (content: string) => void;
  onRequestHumanSupport: () => void;
  language: Language;
}

export function ChatInterface({
  conversation,
  onSendMessage,
  onRequestHumanSupport,
  language
}: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation.messages]);

  const placeholders: Record<Language, string> = {
    english: 'Type your question here...',
    hindi: 'अपना सवाल यहाँ लिखें...',
    marathi: 'तुमचा प्रश्न येथे टाइप करा...'
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {conversation.messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p className="text-lg mb-2">
                {language === 'hindi' ? 'बातचीत शुरू करें' :
                 language === 'marathi' ? 'संभाषण सुरू करा' :
                 'Start a conversation'}
              </p>
              <p className="text-sm">
                {language === 'hindi' ? 'अपना सवाल पूछें' :
                 language === 'marathi' ? 'तुमचा प्रश्न विचारा' :
                 'Ask your question'}
              </p>
            </div>
          </div>
        ) : (
          conversation.messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 p-4 bg-white space-y-3">
        <div className="flex items-center justify-between">
          <HumanSupportButton
            onClick={onRequestHumanSupport}
            isActive={conversation.requiresHuman}
          />

          {conversation.status === 'escalated' && (
            <span className="text-sm text-orange-600 font-medium">
              {language === 'hindi' ? 'मानव सहायता को अनुरोध भेजा गया' :
               language === 'marathi' ? 'मानवी सहाय्याची विनंती पाठवली' :
               'Human support requested'}
            </span>
          )}
        </div>

        <ChatInput
          onSendMessage={onSendMessage}
          placeholder={placeholders[language]}
        />
      </div>
    </div>
  );
}
