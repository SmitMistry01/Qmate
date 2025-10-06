export function LanguageShowcase() {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Speak Your Language
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Breaking language barriers to provide equitable access to information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full font-bold text-lg mb-4">
                English
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                Welcome!
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">Student:</p>
                <p className="text-gray-900">What are the college timings?</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-blue-600 mb-1">Assistant:</p>
                <p className="text-gray-900">
                  College timings are 8:00 AM to 4:00 PM, Monday to Friday. Saturday has classes from 8:00 AM to 1:00 PM.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-3 rounded-full font-bold text-lg mb-4">
                हिंदी (Hindi)
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                स्वागत है!
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">छात्र:</p>
                <p className="text-gray-900">कॉलेज का समय क्या है?</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-sm text-green-600 mb-1">सहायक:</p>
                <p className="text-gray-900">
                  कॉलेज का समय सोमवार से शुक्रवार सुबह 8:00 बजे से शाम 4:00 बजे तक है। शनिवार को सुबह 8:00 बजे से दोपहर 1:00 बजे तक कक्षाएं हैं।
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="inline-block bg-orange-100 text-orange-600 px-6 py-3 rounded-full font-bold text-lg mb-4">
                मराठी (Marathi)
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                स्वागत आहे!
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">विद्यार्थी:</p>
                <p className="text-gray-900">महाविद्यालयाची वेळ काय आहे?</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-sm text-orange-600 mb-1">सहाय्यक:</p>
                <p className="text-gray-900">
                  महाविद्यालयाची वेळ सोमवार ते शुक्रवार सकाळी 8:00 ते संध्याकाळी 4:00 आहे। शनिवारी सकाळी 8:00 ते दुपारी 1:00 वर्ग आहेत.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
