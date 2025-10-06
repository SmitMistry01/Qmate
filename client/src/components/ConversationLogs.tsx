import { useState } from 'react';
import { Conversation } from '../types/chatbot';
import { Search, Calendar, MessageSquare, TrendingUp, AlertCircle } from 'lucide-react';

interface ConversationLogsProps {
  conversations: Conversation[];
}

export function ConversationLogs({ conversations }: ConversationLogsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.messages.some(msg =>
      msg.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesStatus = filterStatus === 'all' || conv.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: conversations.length,
    active: conversations.filter(c => c.status === 'active').length,
    resolved: conversations.filter(c => c.status === 'resolved').length,
    escalated: conversations.filter(c => c.requiresHuman).length,
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Conversations</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <MessageSquare className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active</p>
              <p className="text-2xl font-bold text-green-600">{stats.active}</p>
            </div>
            <TrendingUp className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Resolved</p>
              <p className="text-2xl font-bold text-gray-600">{stats.resolved}</p>
            </div>
            <Calendar className="text-gray-500" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Escalated</p>
              <p className="text-2xl font-bold text-orange-600">{stats.escalated}</p>
            </div>
            <AlertCircle className="text-orange-500" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="resolved">Resolved</option>
            <option value="escalated">Escalated</option>
          </select>
        </div>

        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          {filteredConversations.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No conversations found
            </div>
          ) : (
            filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">
                        {conversation.studentName || 'Anonymous'}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        conversation.status === 'active' ? 'bg-green-100 text-green-700' :
                        conversation.status === 'resolved' ? 'bg-gray-100 text-gray-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {conversation.status}
                      </span>
                      {conversation.requiresHuman && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
                          Human Support
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      Language: {conversation.language}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400">
                    {conversation.startedAt.toLocaleString()}
                  </p>
                </div>

                <div className="text-sm text-gray-600 line-clamp-2">
                  {conversation.messages[conversation.messages.length - 1]?.content}
                </div>

                <div className="mt-2 text-xs text-gray-500">
                  {conversation.messages.length} messages
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
