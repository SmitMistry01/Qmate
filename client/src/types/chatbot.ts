export type Language = 'english' | 'hindi' | 'marathi';

export type SenderType = 'student' | 'bot' | 'human';

export type ConversationStatus = 'active' | 'resolved' | 'escalated';

export interface Message {
  id: string;
  content: string;
  senderType: SenderType;
  timestamp: Date;
  language: Language;
  intent?: string;
  confidence?: number;
}

export interface Conversation {
  id: string;
  messages: Message[];
  language: Language;
  status: ConversationStatus;
  requiresHuman: boolean;
  startedAt: Date;
  studentName?: string;
  studentEmail?: string;
}

export interface Intent {
  name: string;
  keywords: string[];
  responses: Record<Language, string>;
  priority: number;
}

export interface KnowledgeBaseItem {
  id: string;
  category: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  keywords: string[];
  viewCount: number;
}
