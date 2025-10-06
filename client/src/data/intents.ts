import { Intent } from '../types/chatbot';

export const intents: Intent[] = [
  {
    name: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'namaste', 'नमस्ते', 'नमस्कार', 'हॅलो'],
    responses: {
      english: 'Hello! Welcome to our college chatbot. How can I help you today?',
      hindi: 'नमस्ते! हमारे कॉलेज चैटबॉट में आपका स्वागत है। मैं आज आपकी कैसे मदद कर सकता हूं?',
      marathi: 'नमस्कार! आमच्या महाविद्यालयाच्या चॅटबॉटमध्ये आपले स्वागत आहे. मी आज तुम्हाला कशी मदत करू शकतो?'
    },
    priority: 1
  },
  {
    name: 'admissions',
    keywords: ['admission', 'apply', 'entrance', 'eligibility', 'form', 'प्रवेश', 'दाखला', 'फॉर्म', 'योग्यता'],
    responses: {
      english: 'For admissions information:\n• Admission forms are available from June to August\n• Visit our admissions office or website\n• Check eligibility criteria on our website\n• Submit required documents with the application form\n\nWould you like more specific information about any particular course?',
      hindi: 'प्रवेश की जानकारी के लिए:\n• प्रवेश फॉर्म जून से अगस्त तक उपलब्ध हैं\n• हमारे प्रवेश कार्यालय या वेबसाइट पर जाएं\n• हमारी वेबसाइट पर योग्यता मानदंड जांचें\n• आवेदन फॉर्म के साथ आवश्यक दस्तावेज जमा करें\n\nक्या आप किसी विशेष पाठ्यक्रम के बारे में अधिक जानकारी चाहते हैं?',
      marathi: 'प्रवेशाच्या माहितीसाठी:\n• प्रवेश फॉर्म जून ते ऑगस्ट उपलब्ध आहेत\n• आमच्या प्रवेश कार्यालयाला भेट द्या किंवा वेबसाइट पहा\n• आमच्या वेबसाइटवर पात्रता निकष तपासा\n• अर्जासोबत आवश्यक कागदपत्रे सादर करा\n\nतुम्हाला कोणत्याही विशिष्ट अभ्यासक्रमाबद्दल अधिक माहिती हवी आहे का?'
    },
    priority: 1
  },
  {
    name: 'fees',
    keywords: ['fee', 'fees', 'payment', 'cost', 'scholarship', 'financial', 'फीस', 'शुल्क', 'भुगतान', 'छात्रवृत्ति'],
    responses: {
      english: 'Fee Information:\n• Fee structure is available on our website\n• Online payment available through our portal\n• Offline payment at college accounts office\n• Scholarships available based on merit and need\n• Installment options available\n\nContact accounts office for detailed fee structure.',
      hindi: 'फीस की जानकारी:\n• फीस संरचना हमारी वेबसाइट पर उपलब्ध है\n• हमारे पोर्टल के माध्यम से ऑनलाइन भुगतान उपलब्ध है\n• कॉलेज लेखा कार्यालय में ऑफलाइन भुगतान\n• योग्यता और आवश्यकता के आधार पर छात्रवृत्ति उपलब्ध है\n• किस्त विकल्प उपलब्ध हैं\n\nविस्तृत फीस संरचना के लिए लेखा कार्यालय से संपर्क करें।',
      marathi: 'फीची माहिती:\n• फी रचना आमच्या वेबसाइटवर उपलब्ध आहे\n• आमच्या पोर्टलद्वारे ऑनलाइन पेमेंट उपलब्ध\n• महाविद्यालय लेखा कार्यालयात ऑफलाइन पेमेंट\n• गुणवत्ता आणि गरजेनुसार शिष्यवृत्ती उपलब्ध\n• हप्त्याचे पर्याय उपलब्ध\n\nतपशीलवार फी रचनेसाठी लेखा कार्यालयाशी संपर्क साधा.'
    },
    priority: 2
  },
  {
    name: 'examinations',
    keywords: ['exam', 'examination', 'result', 'schedule', 'timetable', 'marks', 'परीक्षा', 'परिणाम', 'समय सारणी', 'अंक'],
    responses: {
      english: 'Examination Information:\n• Exam schedules posted on notice board and website\n• Results published within 30 days of exams\n• Hall tickets available 1 week before exams\n• Revaluation requests accepted within 15 days\n• Check examination section on website for updates\n\nNeed help with anything specific?',
      hindi: 'परीक्षा की जानकारी:\n• परीक्षा का समय नोटिस बोर्ड और वेबसाइट पर पोस्ट किया गया है\n• परीक्षा के 30 दिनों के भीतर परिणाम प्रकाशित\n• परीक्षा से 1 सप्ताह पहले हॉल टिकट उपलब्ध\n• 15 दिनों के भीतर पुनर्मूल्यांकन अनुरोध स्वीकार किए जाते हैं\n• अपडेट के लिए वेबसाइट पर परीक्षा अनुभाग देखें\n\nकिसी विशेष चीज़ में मदद चाहिए?',
      marathi: 'परीक्षा माहिती:\n• परीक्षा वेळापत्रक नोटीस बोर्ड आणि वेबसाइटवर पोस्ट केले\n• परीक्षेच्या 30 दिवसांत निकाल प्रसिद्ध\n• परीक्षेच्या 1 आठवडा आधी हॉल तिकिट उपलब्ध\n• 15 दिवसांत पुनर्मूल्यांकन विनंत्या स्वीकारल्या जातात\n• अपडेटसाठी वेबसाइटवरील परीक्षा विभाग पहा\n\nकाही विशिष्ट मदत हवी आहे का?'
    },
    priority: 1
  },
  {
    name: 'library',
    keywords: ['library', 'book', 'books', 'timing', 'hours', 'issue', 'पुस्तकालय', 'किताब', 'समय', 'ग्रंथालय'],
    responses: {
      english: 'Library Information:\n• Open Monday to Saturday, 9 AM to 6 PM\n• Issue up to 3 books at a time for 15 days\n• Digital library resources available 24/7\n• Computer and internet facilities available\n• Reading rooms for quiet study\n\nVisit library or check online catalog for book availability.',
      hindi: 'पुस्तकालय की जानकारी:\n• सोमवार से शनिवार, सुबह 9 बजे से शाम 6 बजे तक खुला\n• 15 दिनों के लिए एक समय में 3 किताबें जारी करें\n• डिजिटल पुस्तकालय संसाधन 24/7 उपलब्ध\n• कंप्यूटर और इंटरनेट सुविधा उपलब्ध\n• शांत अध्ययन के लिए पठन कक्ष\n\nपुस्तक उपलब्धता के लिए पुस्तकालय जाएं या ऑनलाइन कैटलॉग देखें।',
      marathi: 'ग्रंथालय माहिती:\n• सोमवार ते शनिवार, सकाळी 9 ते संध्याकाळी 6 वाजेपर्यंत खुले\n• 15 दिवसांसाठी एका वेळी 3 पुस्तके जारी करा\n• डिजिटल ग्रंथालय संसाधने 24/7 उपलब्ध\n• संगणक आणि इंटरनेट सुविधा उपलब्ध\n• शांत अभ्यासासाठी वाचन खोल्या\n\nपुस्तक उपलब्धतेसाठी ग्रंथालयाला भेट द्या किंवा ऑनलाइन कॅटलॉग पहा.'
    },
    priority: 3
  },
  {
    name: 'hostel',
    keywords: ['hostel', 'accommodation', 'room', 'mess', 'residence', 'छात्रावास', 'आवास', 'कमरा', 'वसतिगृह'],
    responses: {
      english: 'Hostel Information:\n• Separate hostels for boys and girls\n• Applications open in June\n• Mess facilities with nutritious meals\n• 24/7 security and warden supervision\n• WiFi and study rooms available\n\nContact hostel office for room availability and application process.',
      hindi: 'छात्रावास की जानकारी:\n• लड़कों और लड़कियों के लिए अलग छात्रावास\n• जून में आवेदन खुलते हैं\n• पौष्टिक भोजन के साथ मेस सुविधाएं\n• 24/7 सुरक्षा और वार्डन पर्यवेक्षण\n• वाईफाई और अध्ययन कक्ष उपलब्ध\n\nकमरे की उपलब्धता और आवेदन प्रक्रिया के लिए छात्रावास कार्यालय से संपर्क करें।',
      marathi: 'वसतिगृह माहिती:\n• मुले आणि मुलींसाठी स्वतंत्र वसतिगृह\n• जूनमध्ये अर्ज उघडतात\n• पौष्टिक जेवणासह मेस सुविधा\n• 24/7 सुरक्षा आणि वॉर्डन पर्यवेक्षण\n• वायफाय आणि अभ्यास खोल्या उपलब्ध\n\nखोली उपलब्धता आणि अर्ज प्रक्रियेसाठी वसतिगृह कार्यालयाशी संपर्क साधा.'
    },
    priority: 2
  },
  {
    name: 'timings',
    keywords: ['timing', 'timings', 'hours', 'schedule', 'time', 'समय', 'वेळ', 'घंटे'],
    responses: {
      english: 'College Timings:\n• Monday to Friday: 8:00 AM to 4:00 PM\n• Saturday: 8:00 AM to 1:00 PM\n• Sunday: Closed\n• Office hours: 9:00 AM to 5:00 PM\n\nDifferent departments may have specific timings.',
      hindi: 'कॉलेज का समय:\n• सोमवार से शुक्रवार: सुबह 8:00 बजे से शाम 4:00 बजे तक\n• शनिवार: सुबह 8:00 बजे से दोपहर 1:00 बजे तक\n• रविवार: बंद\n• कार्यालय समय: सुबह 9:00 बजे से शाम 5:00 बजे तक\n\nविभिन्न विभागों का विशिष्ट समय हो सकता है।',
      marathi: 'महाविद्यालय वेळ:\n• सोमवार ते शुक्रवार: सकाळी 8:00 ते संध्याकाळी 4:00\n• शनिवार: सकाळी 8:00 ते दुपारी 1:00\n• रविवार: बंद\n• कार्यालय वेळ: सकाळी 9:00 ते संध्याकाळी 5:00\n\nवेगवेगळ्या विभागांची विशिष्ट वेळ असू शकते.'
    },
    priority: 3
  },
  {
    name: 'facilities',
    keywords: ['facility', 'facilities', 'wifi', 'internet', 'lab', 'sports', 'canteen', 'सुविधा', 'वाईफाई', 'लैब'],
    responses: {
      english: 'College Facilities:\n• Free WiFi throughout campus\n• Modern computer labs\n• Science and engineering labs\n• Sports facilities and gym\n• Canteen with hygienic food\n• Medical room\n• Transport facilities\n\nWhich facility would you like to know more about?',
      hindi: 'कॉलेज की सुविधाएं:\n• पूरे कैंपस में मुफ्त वाईफाई\n• आधुनिक कंप्यूटर लैब\n• विज्ञान और इंजीनियरिंग लैब\n• खेल सुविधाएं और जिम\n• स्वच्छ भोजन के साथ कैंटीन\n• चिकित्सा कक्ष\n• परिवहन सुविधाएं\n\nआप किस सुविधा के बारे में अधिक जानना चाहेंगे?',
      marathi: 'महाविद्यालय सुविधा:\n• संपूर्ण कॅम्पसमध्ये मोफत वायफाय\n• आधुनिक संगणक प्रयोगशाळा\n• विज्ञान आणि अभियांत्रिकी प्रयोगशाळा\n• क्रीडा सुविधा आणि व्यायामशाळा\n• स्वच्छ अन्नासह कॅन्टीन\n• वैद्यकीय खोली\n• वाहतूक सुविधा\n\nतुम्हाला कोणत्या सुविधेबद्दल अधिक जाणून घ्यायचे आहे?'
    },
    priority: 3
  },
  {
    name: 'unknown',
    keywords: [],
    responses: {
      english: "I'm not sure I understand your question. Could you please rephrase it or ask about:\n• Admissions\n• Fees and Scholarships\n• Examinations and Results\n• Library\n• Hostel\n• College Facilities\n\nOr would you like to speak with a human support staff?",
      hindi: "मुझे यकीन नहीं है कि मैं आपके प्रश्न को समझता हूं। कृपया इसे दोबारा बताएं या इसके बारे में पूछें:\n• प्रवेश\n• फीस और छात्रवृत्ति\n• परीक्षा और परिणाम\n• पुस्तकालय\n• छात्रावास\n• कॉलेज सुविधाएं\n\nया आप मानव सहायता कर्मचारियों से बात करना चाहेंगे?",
      marathi: "मला खात्री नाही की मला तुमचा प्रश्न समजला आहे. कृपया ते पुन्हा सांगा किंवा याबद्दल विचारा:\n• प्रवेश\n• फी आणि शिष्यवृत्ती\n• परीक्षा आणि निकाल\n• ग्रंथालय\n• वसतिगृह\n• महाविद्यालय सुविधा\n\nकिंवा तुम्हाला मानवी सहाय्य कर्मचाऱ्यांशी बोलायचे आहे का?"
    },
    priority: 0
  }
];
