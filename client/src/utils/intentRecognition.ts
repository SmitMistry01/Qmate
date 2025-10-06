import { intents } from '../data/intents';
import { Language } from '../types/chatbot';

interface IntentMatch {
  intent: string;
  confidence: number;
  response: string;
}

export function recognizeIntent(message: string, language: Language): IntentMatch {
  const normalizedMessage = message.toLowerCase().trim();

  let bestMatch = {
    intent: 'unknown',
    confidence: 0,
    response: intents.find(i => i.name === 'unknown')?.responses[language] || ''
  };

  for (const intent of intents) {
    if (intent.name === 'unknown') continue;

    let matchCount = 0;
    let totalKeywords = intent.keywords.length;

    for (const keyword of intent.keywords) {
      if (normalizedMessage.includes(keyword.toLowerCase())) {
        matchCount++;
      }
    }

    const confidence = totalKeywords > 0 ? (matchCount / totalKeywords) : 0;

    if (matchCount > 0 && confidence > bestMatch.confidence) {
      bestMatch = {
        intent: intent.name,
        confidence: Math.min(confidence * 1.5, 1),
        response: intent.responses[language]
      };
    }
  }

  if (bestMatch.confidence < 0.3) {
    const unknownIntent = intents.find(i => i.name === 'unknown');
    return {
      intent: 'unknown',
      confidence: 0,
      response: unknownIntent?.responses[language] || ''
    };
  }

  return bestMatch;
}

export function getGreeting(language: Language): string {
  const greetingIntent = intents.find(i => i.name === 'greeting');
  return greetingIntent?.responses[language] || 'Hello! How can I help you?';
}
