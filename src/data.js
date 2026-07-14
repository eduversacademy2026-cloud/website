export const FEATURES = [
  { icon: 'expert', title: 'Expert Faculty', desc: 'Experienced teachers focused on clear concepts, guidance, and doubt-solving every step of the way.' },
  { icon: 'course', title: 'Structured Courses', desc: 'Proper syllabus coverage, step-by-step lessons, and regular practice designed for real results.' },
  { icon: 'platform', title: 'Reliable Platform', desc: 'One easy-to-use LMS for live classes, recorded videos, PDFs, and tests — accessible anywhere.' },
  { icon: 'rupee', title: 'Affordable Pricing', desc: 'Quality education accessible to every family without compromise on content or teaching quality.' },
  { icon: 'globe', title: 'Bilingual Support', desc: 'English content with Hindi/Urdu support — especially built for Urdu-medium students.' },
  { icon: 'compass', title: 'Career Guidance', desc: 'Personalised career mapping sessions from school years all the way to your chosen profession.' },
  { icon: 'target', title: 'Result-Oriented', desc: 'Every course is built around real results — real ranks, real scholarships, real success stories.' }
]

export const COURSE_CATEGORIES = [
  { id: 'all', label: 'All Programmes' },
  { id: 'language', label: 'Language' },
  { id: 'primary', label: 'Primary & Junior' },
  { id: 'foundation', label: 'Foundation & Competitive' },
  { id: 'board', label: 'Board Exam Prep' },
  { id: 'career', label: 'Career & Govt Exams' }
]

export const COURSES = [
  { category: 'language', title: 'Urdu Reading & Learning', level: 'All Ages', desc: 'Learn to read, write, and understand Urdu from scratch — script, vocabulary, and conversation.', price: '₹199', priceNote: 'One-Time', duration: '40 Days' },
  { category: 'language', title: 'English Reading', level: 'Beginners', desc: 'A structured phonics and reading programme to build strong English reading habits.', price: '₹199', priceNote: '/month', duration: '30 Days' },
  { category: 'language', title: 'English Learning (Basic)', level: 'Class 1–6', desc: 'Phonics-based programme to build strong English reading habits — alphabet, words, sentences, and fluency.', price: '₹499', priceNote: 'One-Time' },
  { category: 'language', title: 'English Learning (Advanced)', level: 'Class 6–10', desc: 'Advanced English: essay writing, comprehension, grammar mastery, and spoken fluency.', price: '₹999', priceNote: 'One-Time' },
  { category: 'primary', title: 'Primary Classes', level: 'Class 1–4', desc: 'A strong early foundation in Math, English, Science & EVS — fun, concept-based lessons.', priceNote: 'Custom Plan' },
  { category: 'primary', title: '4th Class Scholarship Course', level: 'Class 4', desc: 'Scholarship preparation covering talent-exam patterns, reasoning, Math & English.', price: '₹199', priceNote: '/month', badge: 'Most Popular' },
  { category: 'primary', title: '7th Class Scholarship Course', level: 'Class 7', desc: 'Focused prep for NMMS and state scholarship exams — subject-wise practice and mock tests.', price: '₹199', priceNote: '/month', badge: 'Most Popular' },
  { category: 'foundation', title: 'NEET / JEE Foundation', level: 'Class 6–10', desc: 'A rock-solid foundation in Physics, Chemistry, Math & Biology for IIT-JEE and NEET.', priceNote: 'Custom Plan' },
  { category: 'foundation', title: 'JEE + NEET Mains', level: 'Class 11–12', desc: 'Intensive Mains-level preparation — full syllabus, chapter tests, mock exams, and doubt sessions.', priceNote: 'Custom Plan' },
  { category: 'board', title: '10th Board Exam Prep', level: 'Class 10', desc: 'Full board-exam preparation — chapter-wise revision, important questions, and exam strategy.', price: '₹1499', priceNote: 'One-Time', badge: 'High Demand' },
  { category: 'career', title: 'MPSC Preparation', level: 'Graduates', desc: 'Complete Maharashtra PSC preparation — all papers, current affairs, GK, and aptitude.', priceNote: 'Custom Plan' },
  { category: 'career', title: 'UPSC Preparation', level: 'Graduates', desc: 'Full UPSC Civil Services preparation — Prelims, Mains, and Interview guidance.', priceNote: 'Custom Plan' }
]

export const LEADERS = [
  { initials: 'RF', name: 'Rehan Fazal', role: 'Founder & Owner', bio: 'D.Ed, MA, B.Ed', image: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1783197224/rehan_bhai-removebg-preview_ttwelr.png' },
  { initials: 'AJ', name: 'Ab Jaleel', role: 'Admin & IT Team', bio: 'Keeps the learning platform reliable, secure, and easy to use.', image: 'https://res.cloudinary.com/yyxm1nvc/image/upload/f_auto,q_auto/jallelbhai_zzbxy5' },
  { initials: 'AM', name: 'Abdul Muheet', role: 'Admin & IT Team', bio: 'Builds and maintains the digital tools behind every class and test.', image: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1783195181/muheetbhai-removebg-preview_ek9cyw.png' }
]

export const TEACHERS = [
  { initials: 'NQ', name: 'NR Quadri Sir', role: 'Teaching Staff', bio: 'Maths Trainer, Education Mentor' },
  { initials: 'ND', name: 'Nisar Deshmukh Sir', role: 'Teaching Staff', bio: 'MA English, MSc Maths, B.Ed' },
  { initials: 'IR', name: 'Imran Rizwanoddin Sir', role: 'Teaching Staff', bio: 'MA English, B.Ed' },
  { initials: 'MN', name: 'M Nasir Khan Sir', role: 'Teaching Staff', bio: 'MSc, B.Ed' }
]

export const TESTIMONIALS = [
  { initials: 'AK', quote: 'Eduverse Academy explains concepts in a simple and clear way. My understanding of every subject improved quickly.', name: 'Ashmira Khan', role: 'Student' },
  { initials: 'AS', quote: 'A good platform for structured learning and test preparation. The recorded lectures make it easy to revise anytime.', name: 'Abdur Rahman Shaikh', role: 'Student' },
  { initials: 'SD', quote: 'Thanks to the videos and the online test series, 19 of my 20 children became eligible for the scholarship this year.', name: 'Shaikh Danish', role: 'Parent' },
  { initials: 'TR', quote: 'Thank you for the free guidance — your hard work helped our student secure 1st rank in Taluka Nandgaon Khandeshwar.', name: 'Tahseen Raza', role: 'Teacher' }
]

export const FAQS = [
  { q: 'Which classes and courses does Eduverse Academy offer?', a: 'We offer programmes for Class 1–12, scholarship exam preparation (4th & 7th class), competitive exam foundations (JEE/NEET), board exam prep, and government exam coaching (MPSC/UPSC/CTET).' },
  { q: 'Are classes conducted in English or Urdu?', a: 'Both. Our content is primarily in English with Hindi/Urdu support, and we offer a dedicated Urdu Reading & Learning course.' },
  { q: 'How can I get started?', a: 'Send us an email or use the "Get in Touch" button. Our team will guide you through the next steps.' },
  { q: 'Are classes live or recorded?', a: 'Both — join scheduled live classes for direct interaction, and revisit recorded lectures anytime.' },
  { q: 'How do I make a payment?', a: 'Payments are processed securely online. After enrolling, you receive confirmation with class access details.' }
]

export const TIMELINE = [
  { title: 'Enquire', desc: 'Reach out by email or contact form — tell us your class and goals.' },
  { title: 'Counselling', desc: 'A short session to map the right course and learning track for your child.' },
  { title: 'Enrol', desc: 'Complete enrolment and receive your login, Zoom link, and course materials.' },
  { title: 'Start Learning', desc: 'Join live classes, track progress, and get doubt-solving support.' }
]