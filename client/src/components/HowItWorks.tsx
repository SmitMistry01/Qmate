import { MessageCircle, Search, Zap, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Start a Conversation',
      description: 'Choose your preferred language and start chatting with our AI assistant',
      color: 'bg-blue-600'
    },
    {
      icon: Search,
      title: 'Ask Your Question',
      description: 'Type your query about admissions, fees, exams, or any college-related topic',
      color: 'bg-green-600'
    },
    {
      icon: Zap,
      title: 'Get Instant Answers',
      description: 'Our AI analyzes your question and provides accurate, relevant information',
      color: 'bg-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Get Help if Needed',
      description: 'Request human support anytime if you need additional assistance',
      color: 'bg-purple-600'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started is simple and takes less than a minute
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon size={32} />
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-gray-300 border-b-4 border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
