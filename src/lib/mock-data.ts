export const mockUser = {
  id: 'usr_1',
  name: '',
  email: '',
  avatar: '',
  level: ,
  xp: ,
  xpToNext: ,
  streak: ,
  badges: ['', '', '', '', '', ''],
  enrolledCourses: 0,
  completedCourses: 0,
  totalHoursLearned: 0,
  rank: 'coming soon',
};

export const mockCourses = [
  {
    id: 'cs_1',
    title: 'Advanced React Patterns',
    description: 'Master advanced React patterns including compound components, render props, hooks composition, and state machines for building scalable applications.',
    instructor: '',
    instructorAvatar: '',
    thumbnail: '',
    category: 'programming' as const,
    level: 'Advanced',
    duration: '24h',
    lessons: 0,
    enrolled: 0,
    rating: 'coming soon',
    progress: ,
    tags: ['React', 'TypeScript', 'Patterns'],
    isPremium: false,
    lastAccessed: null,
  },
  {
    id: 'cs_2',
    title: 'UI/UX Design Masterclass',
    description: 'Learn professional UI/UX design from wireframing to high-fidelity prototypes. Master Figma, design systems, and user research methodologies.',
    instructor: '',
    instructorAvatar: '',
    thumbnail: '',
    category: 'design' as const,
    level: 'Intermediate',
    duration: '36h',
    lessons: 0,
    enrolled: 0,
    rating: 'coming soon',
    progress: ,
    tags: ['Figma', 'UX Research', 'Design Systems'],
    isPremium: true,
    lastAccessed: null,
  },
  {
    id: 'cs_3',
    title: 'Machine Learning Fundamentals',
    description: 'Build a strong foundation in ML with hands-on projects covering supervised learning, neural networks, and model evaluation techniques.',
    instructor: '',
    instructorAvatar: '',
    thumbnail: '',
    category: 'data-science' as const,
    level: 'Beginner',
    duration: '40h',
    lessons: 0,
    enrolled: 0,
    rating: 'coming soon,
    progress: ,
    tags: ['Python', 'ML', 'TensorFlow'],
    isPremium: false,
    lastAccessed: null,
  },
  {
    id: 'cs_4',
    title: 'Python for Data Science',
    description: 'Comprehensive Python course covering data manipulation, visualization, and analysis with pandas, numpy, and matplotlib.',
    instructor: '',
    instructorAvatar: '',
    thumbnail: '',
    category: 'data-science' as const,
    level: 'Beginner',
    duration: '28h',
    lessons: 0,
    enrolled: 0,
    rating: 'coming soon,
    progress: 0,
    tags: ['Python', 'Pandas', 'NumPy'],
    isPremium: false,
    lastAccessed: null,
  },
 
];

export const mockCourseDetails = {
  id: 'cs_1',
  title: 'Advanced React Patterns',
  description: 'Master advanced React patterns including compound components, render props, hooks composition, and state machines for building scalable applications.',
  instructor: 'Sarah Chen',
  instructorAvatar: '',
  category: 'programming',
  level: 'Advanced',
  duration: '24h',
  totalLessons: 32,
  enrolled: 15420,
  rating: 4.9,
  ratingCount: 2847,
  progress: 68,
  tags: ['React', 'TypeScript', 'Patterns'],
  isPremium: false,
  whatYouLearn: [
    'Build scalable React applications with advanced patterns',
    'Master compound components and render props',
    'Implement custom hooks for complex state logic',
    'Design flexible and composable APIs',
    'Optimize performance with advanced techniques',
  ],
  requirements: [
    'Solid understanding of React fundamentals',
    'Experience with hooks and functional components',
    'Basic TypeScript knowledge',
  ],
  modules: [
    {
      id: 'mod_1',
      title: 'Foundations & Philosophy',
      lessons: [
        { id: 'les_1', title: 'Thinking in Patterns', duration: '12m', completed: true, type: 'video' as const },
        { id: 'les_2', title: 'Component API Design', duration: '18m', completed: true, type: 'video' as const },
        { id: 'les_3', title: 'Practice: API Refactoring', duration: '25m', completed: true, type: 'exercise' as const },
      ],
    },
    {
      id: 'mod_2',
      title: 'Compound Components',
      lessons: [
        { id: 'les_4', title: 'The Compound Pattern', duration: '15m', completed: true, type: 'video' as const },
        { id: 'les_5', title: 'Context Sharing', duration: '20m', completed: true, type: 'video' as const },
        { id: 'les_6', title: 'Building a Tabs Component', duration: '30m', completed: false, type: 'exercise' as const },
        { id: 'les_7', title: 'Flexible APIs with Slots', duration: '22m', completed: false, type: 'video' as const },
      ],
    },
    {
      id: 'mod_3',
      title: 'Advanced Hooks',
      lessons: [
        { id: 'les_8', title: 'Hook Composition Patterns', duration: '18m', completed: false, type: 'video' as const },
        { id: 'les_9', title: 'State Machines with Hooks', duration: '24m', completed: false, type: 'video' as const },
        { id: 'les_10', title: 'Quiz: Advanced Patterns', duration: '15m', completed: false, type: 'quiz' as const },
      ],
    },
  ],
};

export const mockLeaderboard = [ 'coming soon' ];

export const mockNotifications = [


export const mockCertificates = [
 
];

export const mockQuizQuestions = [
  {
    id: 'q1',
    question: 'Which React pattern allows a parent component to implicitly share state with its children without passing props?',
    type: 'multiple-choice' as const,
    options: ['Render Props', 'Context API', 'Higher-Order Components', 'Refs'],
    correctAnswer: 1,
    explanation: 'The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.',
  },
  {
    id: 'q2',
    question: 'What is the primary benefit of the Compound Component pattern?',
    type: 'multiple-choice' as const,
    options: [
      'Better performance',
      'Cleaner API surface and flexible composition',
      'Smaller bundle size',
      'Easier state management',
    ],
    correctAnswer: 1,
    explanation: 'Compound Components provide a declarative and flexible API that allows users to compose components in various ways while maintaining implicit state sharing.',
  },
  {
    id: 'q3',
    question: 'In a state machine pattern, what defines all possible states and transitions?',
    type: 'multiple-choice' as const,
    options: ['Reducer function', 'State chart / configuration', 'Context provider', 'Custom hook'],
    correctAnswer: 1,
    explanation: 'A state chart or configuration object explicitly defines all possible states, events, and transitions, making the state logic predictable and visualizable.',
  },
  {
    id: 'q4',
    question: 'Which hook is essential for implementing the "render props" pattern in modern React?',
    type: 'multiple-choice' as const,
    options: ['useEffect', 'useState', 'useMemo', 'Children + cloneElement or render prop functions'],
    correctAnswer: 3,
    explanation: 'Render props typically involve either passing a render function as a prop or using React.Children.map with cloneElement to inject props into children.',
  },
  {
    id: 'q5',
    question: 'What makes a custom hook "composable"?',
    type: 'multiple-choice' as const,
    options: [
      'It can only be used once per component',
      'It can be used inside other hooks to build complex logic from simpler pieces',
      'It must return a JSX element',
      'It requires TypeScript',
    ],
    correctAnswer: 1,
    explanation: 'Composable hooks can call other hooks and be called from within other hooks, allowing you to build complex stateful logic from smaller, reusable pieces.',
  },
];

export const mockFAQs = [
  {
    category: 'General',
    questions: [
      { q: 'What is Lumabela?', a: 'Lumabela is an AI-powered e-learning platform that provides personalized learning experiences for students worldwide. Our AI tutor Lumi adapts to your learning style and pace.' },
      { q: 'How does the AI tutor work?', a: 'Lumi analyzes your learning patterns, strengths, and areas for improvement to provide personalized explanations, practice problems, and study recommendations.' },
      { q: 'Is Lumabela free to use?', a: 'Lumabela offers both free and premium plans. The free plan includes access to basic courses and limited AI features. Premium unlocks all content and advanced AI capabilities.' },
    ],
  },
  {
    category: 'Courses & Learning',
    questions: [
      { q: 'How are courses structured?', a: 'Each course is divided into modules containing video lessons, interactive exercises, quizzes, and hands-on projects. You learn at your own pace with progress tracking.' },
      { q: 'Can I get certificates?', a: 'Yes! Upon completing a course and passing the final assessment, you receive a verifiable digital certificate that you can share on LinkedIn and other platforms.' },
      { q: 'How long do I have access to a course?', a: 'Once enrolled, you have lifetime access to the course content, including any future updates made by the instructor.' },
    ],
  },
  {
    category: 'Premium & Billing',
    questions: [
      { q: 'What does Premium include?', a: 'Premium includes unlimited access to all courses, advanced AI tutoring, priority support, offline downloads, certificates, and ad-free experience.' },
      { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your Premium subscription at any time. You\'ll continue to have access until the end of your billing period.' },
      { q: 'Do you offer student discounts?', a: 'Yes! We offer 50% off Premium for verified students with a valid .edu email address.' },
    ],
  },
  {
    category: 'Technical',
    questions: [
      { q: 'What devices are supported?', a: 'Lumabela works on all modern browsers, desktop and mobile. We also have progressive web app support for offline learning.' },
      { q: 'Is my data secure?', a: 'Absolutely. We use industry-standard encryption, regular security audits, and never sell your personal data to third parties.' },
    ],
  },
];

export const weeklyProgress = [
  { day: 'Mon', xp: 0, minutes: 0 },
  { day: 'Tue', xp: 0, minutes: 0 },
  { day: 'Wed', xp: 0, minutes: 0 },
  { day: 'Thu', xp: 0, minutes: 0 },
  { day: 'Fri', xp: 0, minutes: 0 },
  { day: 'Sat', xp: 0, minutes: 0 },
  { day: 'Sun', xp: 0, minutes: 0 },
];
