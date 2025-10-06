import { GraduationCap, DollarSign, FileText, BookOpen, Home, Wifi } from 'lucide-react';

export function Topics() {
  const topics = [
    {
      icon: GraduationCap,
      title: 'Admissions',
      titleHindi: 'प्रवेश',
      titleMarathi: 'प्रवेश',
      examples: [
        'Eligibility criteria',
        'Application process',
        'Important dates'
      ]
    },
    {
      icon: DollarSign,
      title: 'Fees & Scholarships',
      titleHindi: 'फीस और छात्रवृत्ति',
      titleMarathi: 'फी आणि शिष्यवृत्ती',
      examples: [
        'Fee structure',
        'Payment methods',
        'Scholarship information'
      ]
    },
    {
      icon: FileText,
      title: 'Examinations',
      titleHindi: 'परीक्षा',
      titleMarathi: 'परीक्षा',
      examples: [
        'Exam schedules',
        'Results',
        'Hall tickets'
      ]
    },
    {
      icon: BookOpen,
      title: 'Library',
      titleHindi: 'पुस्तकालय',
      titleMarathi: 'ग्रंथालय',
      examples: [
        'Library timings',
        'Book availability',
        'Digital resources'
      ]
    },
    {
      icon: Home,
      title: 'Hostel',
      titleHindi: 'छात्रावास',
      titleMarathi: 'वसतिगृह',
      examples: [
        'Room availability',
        'Mess facilities',
        'Application process'
      ]
    },
    {
      icon: Wifi,
      title: 'Facilities',
      titleHindi: 'सुविधाएं',
      titleMarathi: 'सुविधा',
      examples: [
        'WiFi access',
        'Labs & equipment',
        'Sports facilities'
      ]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Topics We Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant answers about all aspects of college life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <topic.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {topic.titleHindi} • {topic.titleMarathi}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {topic.examples.map((example, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
