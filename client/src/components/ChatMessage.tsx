import { Message } from '../types/chatbot';
import { Bot, User, UserCog } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.senderType === 'bot';
  const isHuman = message.senderType === 'human';

  return (
    <div className={`flex gap-3 ${isBot || isHuman ? '' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-blue-100 text-blue-600' :
        isHuman ? 'bg-green-100 text-green-600' :
        'bg-gray-200 text-gray-600'
      }`}>
        {isBot ? <Bot size={18} /> : isHuman ? <UserCog size={18} /> : <User size={18} />}
      </div>

      <div className={`flex-1 max-w-[80%] ${isBot || isHuman ? '' : 'flex justify-end'}`}>
        <div className={`rounded-lg px-4 py-3 ${
          isBot || isHuman
            ? 'bg-white border border-gray-200'
            : 'bg-blue-600 text-white'
        }`}>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
          </div>

          {message.intent && message.confidence && (
            <div className="mt-2 pt-2 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-500">
              <span className="font-medium">Intent: {message.intent}</span>
              <span className="px-2 py-0.5 bg-gray-100 rounded">
                {Math.round(message.confidence * 100)}% confidence
              </span>
            </div>
          )}

          <div className="mt-1 text-xs text-gray-400">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
}
