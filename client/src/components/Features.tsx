import { Languages, Brain, Clock, Shield, BarChart3, UserCog } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: 'Communicate in English, Hindi (हिंदी), and Marathi (मराठी) with seamless language switching',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Brain,
      title: 'Smart Intent Recognition',
      description: 'Advanced AI understands your questions and provides accurate, contextual responses',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Get instant answers anytime, anywhere without waiting for office hours',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: UserCog,
      title: 'Human Fallback Support',
      description: 'Seamlessly escalate to human staff when you need personalized assistance',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Conversation Analytics',
      description: 'Track and analyze interactions to continuously improve support quality',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Shield,
      title: 'Privacy Focused',
      description: 'Your data is secure. Use anonymously or optionally provide your details',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to provide exceptional student support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
