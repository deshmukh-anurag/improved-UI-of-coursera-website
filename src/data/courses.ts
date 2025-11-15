export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorBio?: string;
  rating: number;
  reviews: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  thumbnail: string;
  description: string;
  syllabus: string[];
  price?: number;
  students?: number;
}

export const courses: Course[] = [
  {
    id: 'ai-101',
    title: 'Foundations of Artificial Intelligence',
    instructor: 'Dr. Maya Thompson',
    instructorBio: 'AI researcher with 15+ years of experience in machine learning and neural networks. Former lead scientist at TechVision Labs.',
    rating: 4.8,
    reviews: 3247,
    duration: '10 hours',
    level: 'Beginner',
    category: 'AI',
    thumbnail: '/img/ai.jpg',
    description: 'Learn the fundamentals of artificial intelligence including reasoning, search algorithms, and machine learning principles. This comprehensive course covers everything from basic concepts to practical applications.',
    syllabus: [
      'Introduction to AI & its applications',
      'Search algorithms and problem-solving',
      'Machine learning basics',
      'Neural networks fundamentals',
      'Natural language processing',
      'Computer vision overview',
      'Ethics in AI',
      'Real-world AI projects'
    ],
    price: 89,
    students: 15234
  },
  {
    id: 'design-mastery',
    title: 'Modern UI/UX Design Principles',
    instructor: 'Sarah Chen',
    instructorBio: 'Award-winning designer with expertise in creating intuitive digital experiences. Worked with Fortune 500 companies.',
    rating: 4.9,
    reviews: 1892,
    duration: '12 hours',
    level: 'Intermediate',
    category: 'Design',
    thumbnail: '/img/design.jpg',
    description: 'Master the art of creating beautiful and functional user interfaces. Learn design thinking, prototyping, and user research methodologies.',
    syllabus: [
      'Design thinking fundamentals',
      'User research and personas',
      'Wireframing and prototyping',
      'Visual design principles',
      'Typography and color theory',
      'Responsive design patterns',
      'Design systems',
      'Portfolio development'
    ],
    price: 79,
    students: 9876
  },
  {
    id: 'business-strategy',
    title: 'Strategic Business Leadership',
    instructor: 'James Rodriguez',
    instructorBio: 'Former CEO with 20+ years of executive experience. Built three successful startups from ground up.',
    rating: 4.7,
    reviews: 2156,
    duration: '14 hours',
    level: 'Intermediate',
    category: 'Business',
    thumbnail: '/img/business.jpg',
    description: 'Develop strategic thinking skills and learn how to lead organizations through complex challenges. Perfect for aspiring executives and entrepreneurs.',
    syllabus: [
      'Strategic planning frameworks',
      'Market analysis and positioning',
      'Organizational leadership',
      'Financial decision-making',
      'Innovation and disruption',
      'Team building and culture',
      'Crisis management',
      'Growth strategies'
    ],
    price: 99,
    students: 11245
  },
  {
    id: 'web-dev-advanced',
    title: 'Advanced Web Development',
    instructor: 'Alex Kumar',
    instructorBio: 'Full-stack developer and tech educator. Created popular open-source frameworks used by thousands of developers.',
    rating: 4.8,
    reviews: 3421,
    duration: '16 hours',
    level: 'Advanced',
    category: 'Tech',
    thumbnail: '/img/webdev.jpg',
    description: 'Take your web development skills to the next level. Learn advanced React patterns, serverless architecture, and performance optimization.',
    syllabus: [
      'Advanced React patterns',
      'State management strategies',
      'Serverless architecture',
      'Performance optimization',
      'Testing and debugging',
      'DevOps and deployment',
      'Microservices design',
      'Security best practices'
    ],
    price: 109,
    students: 18765
  },
  {
    id: 'finance-fundamentals',
    title: 'Personal Finance Mastery',
    instructor: 'Emily Watson',
    instructorBio: 'Certified financial planner with expertise in wealth management and investment strategies.',
    rating: 4.6,
    reviews: 1654,
    duration: '8 hours',
    level: 'Beginner',
    category: 'Finance',
    thumbnail: '/img/finance.jpg',
    description: 'Build a solid foundation in personal finance. Learn budgeting, investing, retirement planning, and wealth building strategies.',
    syllabus: [
      'Budgeting and expense tracking',
      'Understanding credit and debt',
      'Investment basics',
      'Retirement planning',
      'Tax optimization',
      'Real estate investing',
      'Risk management',
      'Building generational wealth'
    ],
    price: 69,
    students: 8765
  },
  {
    id: 'growth-mindset',
    title: 'Personal Growth & Productivity',
    instructor: 'Michael Park',
    instructorBio: 'Life coach and productivity expert. Helped thousands achieve their personal and professional goals.',
    rating: 4.9,
    reviews: 2891,
    duration: '6 hours',
    level: 'Beginner',
    category: 'Personal Growth',
    thumbnail: '/img/growth.jpg',
    description: 'Transform your life through proven productivity techniques and personal development strategies. Learn to achieve more with less stress.',
    syllabus: [
      'Goal setting and planning',
      'Time management systems',
      'Habit formation',
      'Mindfulness and focus',
      'Overcoming procrastination',
      'Building resilience',
      'Work-life balance',
      'Creating lasting change'
    ],
    price: 59,
    students: 12456
  },
  {
    id: 'data-science',
    title: 'Data Science Essentials',
    instructor: 'Dr. Priya Sharma',
    instructorBio: 'Data scientist with PhD in Statistics. Published researcher in machine learning and predictive analytics.',
    rating: 4.7,
    reviews: 1987,
    duration: '15 hours',
    level: 'Intermediate',
    category: 'Tech',
    thumbnail: '/img/data.jpg',
    description: 'Master data analysis, visualization, and machine learning. Learn to extract insights from complex datasets using Python and modern tools.',
    syllabus: [
      'Data collection and cleaning',
      'Exploratory data analysis',
      'Statistical modeling',
      'Machine learning algorithms',
      'Data visualization',
      'Big data tools',
      'Predictive analytics',
      'Capstone project'
    ],
    price: 94,
    students: 9876
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Strategy',
    instructor: 'Lisa Anderson',
    instructorBio: 'Marketing expert with proven track record of growing brands online. Generated millions in revenue for clients.',
    rating: 4.8,
    reviews: 2234,
    duration: '11 hours',
    level: 'Intermediate',
    category: 'Business',
    thumbnail: '/img/marketing.jpg',
    description: 'Learn to create effective digital marketing campaigns. Master SEO, social media, content marketing, and analytics.',
    syllabus: [
      'Marketing fundamentals',
      'SEO and content strategy',
      'Social media marketing',
      'Email marketing campaigns',
      'Paid advertising (PPC)',
      'Analytics and measurement',
      'Conversion optimization',
      'Marketing automation'
    ],
    price: 84,
    students: 13456
  }
];

export const categories = ['All', 'AI', 'Design', 'Business', 'Tech', 'Finance', 'Personal Growth'];

export const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];

