export interface SyllabusItem {
  title: string;
  hours: number;
  description?: string;
}

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
  whatYoullLearn: string[];
  skillsYoullGain: string[];
  syllabus: SyllabusItem[];
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
    description: 'Master the fundamentals of artificial intelligence, from machine learning basics to neural networks. Build practical AI models and understand real-world applications transforming industries today.',
    whatYoullLearn: [
      'Understand core AI concepts including reasoning, search algorithms, and machine learning principles',
      'Build and train neural networks using TensorFlow and PyTorch',
      'Apply natural language processing and computer vision techniques',
      'Navigate ethical considerations in AI development and deployment'
    ],
    skillsYoullGain: ['Machine Learning', 'Neural Networks', 'TensorFlow', 'PyTorch', 'Natural Language Processing', 'Computer Vision', 'AI Ethics', 'Deep Learning', 'Python Programming', 'Data Analysis'],
    syllabus: [
      { title: 'Introduction to AI & its applications', hours: 1.5, description: 'Explore the history and evolution of artificial intelligence, from early concepts to modern breakthroughs. Learn about different types of AI systems, their capabilities, and real-world applications across industries including healthcare, finance, transportation, and entertainment. Understand the difference between narrow AI and general AI, and discover how AI is transforming businesses and society.' },
      { title: 'Search algorithms and problem-solving', hours: 1.5, description: 'Master fundamental search algorithms including breadth-first search, depth-first search, and A* algorithm. Learn how AI systems solve complex problems by exploring solution spaces efficiently. Practice implementing these algorithms to solve puzzles, pathfinding problems, and optimization challenges. Understand heuristic functions and how they guide intelligent search.' },
      { title: 'Machine learning basics', hours: 1.5, description: 'Dive into the core concepts of machine learning including supervised, unsupervised, and reinforcement learning. Learn about training data, features, labels, and model evaluation. Explore different types of learning algorithms such as linear regression, decision trees, and k-means clustering. Understand the machine learning workflow from data preparation to model deployment.' },
      { title: 'Neural networks fundamentals', hours: 1.5, description: 'Understand the architecture and functioning of artificial neural networks. Learn about neurons, layers, activation functions, and backpropagation. Explore how neural networks learn from data through forward and backward passes. Get hands-on experience building simple neural networks and understand the mathematics behind deep learning.' },
      { title: 'Natural language processing', hours: 1.0, description: 'Discover how AI systems understand and generate human language. Learn about text preprocessing, tokenization, and language models. Explore techniques for sentiment analysis, named entity recognition, and machine translation. Understand how modern NLP models like transformers work and their applications in chatbots, virtual assistants, and content generation.' },
      { title: 'Computer vision overview', hours: 1.0, description: 'Learn how AI systems interpret and understand visual information from images and videos. Explore image processing techniques, feature detection, and object recognition. Understand convolutional neural networks (CNNs) and their role in image classification. Discover applications in facial recognition, autonomous vehicles, medical imaging, and augmented reality.' },
      { title: 'Ethics in AI', hours: 1.0, description: 'Examine the ethical implications of AI development and deployment. Discuss bias in AI systems, privacy concerns, and algorithmic fairness. Learn about responsible AI practices, transparency, and accountability. Explore case studies of ethical dilemmas in AI and understand frameworks for making ethical decisions in AI projects.' },
      { title: 'Real-world AI projects', hours: 1.0, description: 'Apply your knowledge by building complete AI projects from scratch. Work on practical applications such as image classifiers, recommendation systems, or chatbots. Learn best practices for project planning, data collection, model training, and deployment. Get guidance on presenting your AI projects and building a portfolio that showcases your skills.' }
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
    description: 'Create stunning user interfaces through design thinking, prototyping, and user research. Master industry tools like Figma and Adobe XD while building a professional portfolio.',
    whatYoullLearn: [
      'Apply design thinking methodologies to solve complex user problems',
      'Conduct user research and create personas that inform design decisions',
      'Master wireframing and prototyping with Figma and Adobe XD',
      'Build design systems ensuring consistency across digital products'
    ],
    skillsYoullGain: ['UI/UX Design', 'Figma', 'Adobe XD', 'Design Thinking', 'User Research', 'Prototyping', 'Wireframing', 'Visual Design', 'Design Systems', 'Accessibility'],
    syllabus: [
      { title: 'Design thinking fundamentals', hours: 1.5, description: 'Learn the five-stage design thinking process: empathize, define, ideate, prototype, and test. Understand how to approach problems from a user-centered perspective and develop innovative solutions. Practice empathy mapping and problem framing techniques. Explore how design thinking drives innovation in product development and business strategy.' },
      { title: 'User research and personas', hours: 1.5, description: 'Master techniques for conducting effective user research including interviews, surveys, and usability testing. Learn how to synthesize research findings into actionable insights. Create detailed user personas that represent your target audience. Develop user journey maps to visualize the complete user experience and identify pain points and opportunities.' },
      { title: 'Wireframing and prototyping', hours: 2.0, description: 'Create low-fidelity wireframes to establish information architecture and layout structure. Progress to high-fidelity prototypes using industry-standard tools like Figma and Adobe XD. Learn about different types of prototypes and when to use each. Practice creating interactive prototypes that demonstrate user flows and interactions. Understand how to gather feedback and iterate on your designs.' },
      { title: 'Visual design principles', hours: 2.0, description: 'Explore fundamental design principles including balance, contrast, hierarchy, alignment, and proximity. Learn how to create visual harmony and guide user attention effectively. Understand the role of white space, grids, and layout systems in creating professional designs. Practice applying these principles to create visually appealing and functional interfaces.' },
      { title: 'Typography and color theory', hours: 1.5, description: 'Master typography fundamentals including font selection, hierarchy, spacing, and readability. Learn about color psychology and how to choose effective color palettes. Understand color systems, contrast ratios for accessibility, and how to use color to communicate meaning. Practice creating typographic and color systems that enhance user experience and brand identity.' },
      { title: 'Responsive design patterns', hours: 1.5, description: 'Learn how to design interfaces that work seamlessly across different screen sizes and devices. Understand breakpoints, fluid grids, and flexible layouts. Explore common responsive design patterns and best practices. Practice designing mobile-first and adapting designs for tablets and desktops. Learn about touch targets, navigation patterns, and performance considerations.' },
      { title: 'Design systems', hours: 1.0, description: 'Understand how to create and maintain design systems that ensure consistency across products. Learn about component libraries, style guides, and design tokens. Explore how design systems improve collaboration between designers and developers. Practice documenting design patterns and creating reusable components. Understand the role of design systems in scaling design operations.' },
      { title: 'Portfolio development', hours: 1.0, description: 'Learn how to showcase your design work effectively in a professional portfolio. Understand what makes a strong design portfolio and how to tell compelling stories about your projects. Get guidance on selecting and presenting your best work. Learn how to write case studies that demonstrate your design process and problem-solving skills. Discover strategies for getting your portfolio noticed by employers and clients.' }
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
    description: 'Develop strategic leadership skills to navigate complex business challenges. Learn proven frameworks for market analysis, team building, and driving organizational success.',
    whatYoullLearn: [
      'Apply strategic planning frameworks to analyze markets and identify opportunities',
      'Make informed financial decisions that drive long-term organizational success',
      'Build high-performing teams and foster innovation cultures',
      'Navigate crisis management and implement effective growth strategies'
    ],
    skillsYoullGain: ['Strategic Planning', 'Leadership', 'Business Analysis', 'Financial Decision-Making', 'Team Building', 'Change Management', 'Innovation', 'Crisis Management', 'Market Analysis', 'Organizational Design'],
    syllabus: [
      { title: 'Strategic planning frameworks', hours: 2.0, description: 'Master proven strategic planning frameworks including SWOT analysis, Porter\'s Five Forces, and the Balanced Scorecard. Learn how to set strategic objectives, develop action plans, and align organizational resources. Understand how to conduct environmental scanning and competitive analysis. Practice creating strategic plans that drive long-term organizational success and competitive advantage.' },
      { title: 'Market analysis and positioning', hours: 2.0, description: 'Learn how to analyze markets, identify opportunities, and position your organization for success. Master techniques for market segmentation, target market selection, and competitive positioning. Understand how to conduct market research and interpret market trends. Explore strategies for differentiation and creating unique value propositions that resonate with customers.' },
      { title: 'Organizational leadership', hours: 2.0, description: 'Develop essential leadership skills including vision setting, decision-making, and change management. Learn about different leadership styles and when to apply each. Understand how to inspire and motivate teams, manage conflicts, and build trust. Explore strategies for leading through uncertainty and driving organizational transformation. Practice communication techniques that influence and engage stakeholders.' },
      { title: 'Financial decision-making', hours: 2.0, description: 'Understand key financial concepts including financial statements, cash flow analysis, and budgeting. Learn how to evaluate investment opportunities using techniques like NPV, IRR, and payback period. Master financial forecasting and scenario planning. Explore how to make data-driven financial decisions that balance risk and return while supporting strategic objectives.' },
      { title: 'Innovation and disruption', hours: 1.5, description: 'Explore how to foster innovation and navigate industry disruption. Learn about innovation frameworks, design thinking, and lean startup methodologies. Understand how to identify disruptive trends and opportunities. Discover strategies for building innovation cultures and managing innovation portfolios. Study case studies of successful innovators and disruptors across industries.' },
      { title: 'Team building and culture', hours: 1.5, description: 'Learn how to build high-performing teams and create cultures that drive success. Understand team dynamics, roles, and stages of team development. Master techniques for recruiting, onboarding, and developing talent. Explore how to create inclusive cultures that foster collaboration, creativity, and accountability. Learn about performance management and employee engagement strategies.' },
      { title: 'Crisis management', hours: 1.5, description: 'Develop skills for managing crises and navigating challenging situations. Learn how to identify early warning signs and prepare crisis response plans. Understand communication strategies for managing stakeholder relationships during crises. Explore case studies of successful crisis management and learn from failures. Practice decision-making under pressure and maintaining organizational resilience.' },
      { title: 'Growth strategies', hours: 1.5, description: 'Explore strategies for driving sustainable organizational growth including market penetration, product development, market development, and diversification. Learn about scaling operations, entering new markets, and strategic partnerships. Understand how to balance growth with operational excellence. Discover frameworks for evaluating growth opportunities and managing growth-related risks.' }
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
    description: 'Master advanced React patterns, serverless architecture, and performance optimization. Build production-ready applications with enterprise-level best practices.',
    whatYoullLearn: [
      'Implement advanced React patterns including custom hooks and state management',
      'Build scalable serverless applications using AWS Lambda and modern platforms',
      'Optimize web performance with code splitting, lazy loading, and memoization',
      'Design microservices architectures and implement GraphQL APIs'
    ],
    skillsYoullGain: ['React', 'Serverless Architecture', 'AWS Lambda', 'Performance Optimization', 'State Management', 'GraphQL', 'Microservices', 'WebSockets', 'PWA Development', 'DevOps'],
    syllabus: [
      { title: 'Advanced React patterns', hours: 2.5, description: 'Master advanced React patterns including custom hooks, render props, higher-order components, and compound components. Learn about context optimization, memoization techniques, and performance patterns. Understand how to build reusable component libraries and design flexible component APIs. Explore patterns for managing complex component state and side effects efficiently.' },
      { title: 'State management strategies', hours: 2.0, description: 'Compare and implement different state management solutions including Redux, Zustand, Jotai, and React Query. Learn when to use global state vs local state. Understand state normalization, middleware, and async state handling. Master patterns for managing complex application state and synchronizing state across components. Explore state management best practices and common pitfalls.' },
      { title: 'Serverless architecture', hours: 2.5, description: 'Build scalable applications using serverless architecture with AWS Lambda, Vercel Functions, and other platforms. Learn about function-as-a-service (FaaS), event-driven architectures, and serverless databases. Understand cold starts, concurrency limits, and cost optimization strategies. Practice building serverless APIs, handling authentication, and managing serverless deployments. Explore serverless patterns and anti-patterns.' },
      { title: 'Performance optimization', hours: 2.0, description: 'Master web performance optimization techniques including code splitting, lazy loading, tree shaking, and bundle optimization. Learn about React performance optimization with React.memo, useMemo, and useCallback. Understand Core Web Vitals and how to achieve perfect Lighthouse scores. Explore techniques for optimizing images, fonts, and third-party scripts. Practice profiling and debugging performance issues.' },
      { title: 'Testing and debugging', hours: 2.0, description: 'Learn comprehensive testing strategies including unit testing, integration testing, and end-to-end testing. Master testing tools like Jest, React Testing Library, and Cypress. Understand how to write maintainable test suites and achieve high code coverage. Learn debugging techniques and tools for identifying and fixing issues efficiently. Explore test-driven development (TDD) and behavior-driven development (BDD) practices.' },
      { title: 'DevOps and deployment', hours: 2.0, description: 'Set up CI/CD pipelines using GitHub Actions, GitLab CI, or Jenkins. Learn about containerization with Docker and orchestration with Kubernetes. Understand deployment strategies including blue-green, canary, and rolling deployments. Master environment management, secrets handling, and monitoring. Explore infrastructure as code (IaC) and cloud deployment platforms like Vercel, Netlify, and AWS.' },
      { title: 'Microservices design', hours: 1.5, description: 'Understand microservices architecture patterns and when to use them. Learn about service decomposition, API design, and inter-service communication. Explore patterns for data management, service discovery, and load balancing in microservices. Understand challenges like distributed transactions, eventual consistency, and service mesh. Practice designing and implementing microservices architectures.' },
      { title: 'Security best practices', hours: 1.5, description: 'Implement security best practices including authentication, authorization, and data encryption. Learn about common vulnerabilities like XSS, CSRF, SQL injection, and how to prevent them. Understand OAuth, JWT tokens, and secure session management. Explore content security policies, HTTPS, and secure headers. Learn about security auditing, penetration testing, and compliance requirements.' }
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
    description: 'Take control of your financial future with practical strategies for budgeting, investing, and retirement planning. Build wealth and achieve financial independence.',
    whatYoullLearn: [
      'Create effective budgets and eliminate debt strategically',
      'Build diversified investment portfolios aligned with your financial goals',
      'Plan for retirement using 401k, IRA, and Roth IRA strategies',
      'Optimize taxes and understand real estate investing fundamentals'
    ],
    skillsYoullGain: ['Personal Finance', 'Budgeting', 'Investing', 'Retirement Planning', 'Tax Optimization', 'Portfolio Management', 'Risk Management', 'Financial Planning', 'Wealth Building', 'Estate Planning'],
    syllabus: [
      { title: 'Budgeting and expense tracking', hours: 1.0, description: 'Learn how to create and maintain a budget that works for your lifestyle. Master techniques for tracking expenses, categorizing spending, and identifying areas for improvement. Explore different budgeting methods including the 50/30/20 rule, zero-based budgeting, and envelope system. Understand how to use budgeting apps and tools effectively. Learn strategies for sticking to your budget and adjusting it as your financial situation changes.' },
      { title: 'Understanding credit and debt', hours: 1.0, description: 'Understand how credit scores work and how to improve them. Learn about different types of credit, interest rates, and credit utilization. Master strategies for managing and eliminating debt including the debt snowball and debt avalanche methods. Understand the difference between good debt and bad debt. Learn how to negotiate with creditors and avoid common debt traps.' },
      { title: 'Investment basics', hours: 1.5, description: 'Explore fundamental investment concepts including stocks, bonds, mutual funds, ETFs, and index funds. Learn about asset allocation, diversification, and risk-return tradeoffs. Understand how to build a diversified investment portfolio aligned with your risk tolerance and financial goals. Master investment strategies including dollar-cost averaging and long-term investing. Learn how to evaluate investment opportunities and avoid common investment mistakes.' },
      { title: 'Retirement planning', hours: 1.5, description: 'Learn how to calculate how much you need to save for retirement and create a retirement savings plan. Understand different retirement accounts including 401(k), IRA, Roth IRA, and their tax implications. Master strategies for maximizing employer matches and tax-advantaged savings. Explore retirement withdrawal strategies and how to manage retirement income. Understand Social Security, Medicare, and other retirement benefits.' },
      { title: 'Tax optimization', hours: 1.0, description: 'Learn strategies for minimizing your tax burden legally and ethically. Understand tax deductions, credits, and tax-advantaged accounts. Master techniques for tax-loss harvesting and timing income and deductions. Learn about different tax brackets and how to optimize your tax situation. Understand when to consult with tax professionals and how to prepare for tax season effectively.' },
      { title: 'Real estate investing', hours: 1.0, description: 'Explore real estate investment strategies including rental properties, REITs, and house flipping. Understand how to evaluate real estate investment opportunities and calculate returns. Learn about financing options, property management, and real estate market analysis. Understand the risks and rewards of real estate investing. Learn about tax benefits of real estate investments including depreciation and 1031 exchanges.' },
      { title: 'Risk management', hours: 0.5, description: 'Understand different types of insurance including health, life, disability, and property insurance. Learn how to determine appropriate coverage levels and choose insurance policies. Understand the role of emergency funds in financial security. Learn about estate planning basics including wills, trusts, and beneficiary designations. Explore strategies for protecting your assets and managing financial risks.' },
      { title: 'Building generational wealth', hours: 0.5, description: 'Learn strategies for building and preserving wealth that can be passed to future generations. Understand estate planning, trusts, and wealth transfer strategies. Explore how to teach financial literacy to children and prepare them for financial success. Learn about charitable giving and legacy planning. Understand how to create a comprehensive wealth-building plan that spans generations.' }
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
    description: 'Unlock your potential with proven productivity systems and personal development strategies. Achieve more with less stress through effective time management and habit formation.',
    whatYoullLearn: [
      'Master productivity systems like GTD and the Eisenhower Matrix for better prioritization',
      'Build positive habits and break negative patterns using evidence-based strategies',
      'Develop mindfulness and focus techniques for deep work and reduced distractions',
      'Create sustainable work-life balance and build resilience to handle setbacks'
    ],
    skillsYoullGain: ['Time Management', 'Productivity Systems', 'Habit Formation', 'Goal Setting', 'Mindfulness', 'Focus Techniques', 'Work-Life Balance', 'Resilience Building', 'Stress Management', 'Personal Development'],
    syllabus: [
      { title: 'Goal setting and planning', hours: 1.0, description: 'Master the art of setting meaningful, achievable goals using frameworks like SMART goals and OKRs. Learn how to break down large goals into actionable steps and create effective action plans. Understand the difference between outcome goals and process goals. Explore techniques for prioritizing goals and managing competing objectives. Learn how to track progress and adjust your plans as needed.' },
      { title: 'Time management systems', hours: 1.0, description: 'Explore proven time management systems including Getting Things Done (GTD), the Eisenhower Matrix, and time-blocking. Learn how to prioritize tasks effectively and eliminate time-wasting activities. Master techniques for managing email, meetings, and interruptions. Understand how to estimate time accurately and create realistic schedules. Practice implementing a time management system that works for your unique situation.' },
      { title: 'Habit formation', hours: 0.75, description: 'Understand the science of habit formation and how to build positive habits that stick. Learn about the habit loop (cue, routine, reward) and how to design effective habits. Master strategies for breaking negative habits and replacing them with positive ones. Explore techniques for maintaining motivation and overcoming obstacles. Learn how to create an environment that supports your desired habits.' },
      { title: 'Mindfulness and focus', hours: 0.75, description: 'Develop mindfulness practices that enhance focus and reduce distractions. Learn meditation techniques and breathing exercises for stress reduction and mental clarity. Understand how to achieve and maintain deep work states. Explore strategies for managing digital distractions and maintaining attention. Learn how mindfulness improves decision-making and overall well-being.' },
      { title: 'Overcoming procrastination', hours: 0.75, description: 'Understand the psychological roots of procrastination and why we delay important tasks. Learn proven strategies for overcoming procrastination including the two-minute rule, implementation intentions, and accountability systems. Master techniques for breaking through resistance and getting started. Explore how to manage perfectionism and fear of failure. Learn how to create systems that make it easier to take action.' },
      { title: 'Building resilience', hours: 0.75, description: 'Develop mental and emotional resilience to handle setbacks and challenges effectively. Learn how to reframe failures as learning opportunities. Understand stress management techniques and how to maintain perspective during difficult times. Explore strategies for building self-confidence and maintaining motivation. Learn how to bounce back from setbacks stronger than before.' },
      { title: 'Work-life balance', hours: 0.5, description: 'Learn how to create sustainable work-life balance that prevents burnout and promotes well-being. Understand how to set boundaries and protect your personal time. Explore strategies for managing work stress and maintaining energy. Learn how to prioritize self-care and maintain relationships while pursuing professional goals. Understand how to create a lifestyle that supports both career success and personal fulfillment.' },
      { title: 'Creating lasting change', hours: 0.5, description: 'Master strategies for making lasting changes in your life and maintaining new behaviors long-term. Learn about change management principles and how to navigate the stages of change. Understand how to create accountability systems and support networks. Explore techniques for maintaining motivation and overcoming setbacks. Learn how to build a personal development plan that leads to continuous growth and improvement.' }
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
    description: 'Extract valuable insights from complex datasets using Python. Master data analysis, visualization, and machine learning through hands-on projects and real-world applications.',
    whatYoullLearn: [
      'Collect, clean, and preprocess data from various sources using pandas and NumPy',
      'Perform exploratory data analysis to uncover patterns and relationships',
      'Build and deploy machine learning models using supervised and unsupervised algorithms',
      'Create compelling data visualizations that communicate insights effectively'
    ],
    skillsYoullGain: ['Python', 'Data Analysis', 'Machine Learning', 'Pandas', 'NumPy', 'Data Visualization', 'Statistical Modeling', 'Big Data', 'Predictive Analytics', 'Data Science'],
    syllabus: [
      { title: 'Data collection and cleaning', hours: 2.0, description: 'Learn how to collect data from various sources including APIs, databases, web scraping, and CSV files. Master data cleaning techniques using pandas including handling missing values, duplicates, and outliers. Understand data types, encoding issues, and how to transform data into usable formats. Learn about data quality assessment and validation. Practice cleaning real-world messy datasets and preparing them for analysis.' },
      { title: 'Exploratory data analysis', hours: 2.5, description: 'Master techniques for exploring and understanding your data including summary statistics, distributions, and correlations. Learn how to identify patterns, trends, and anomalies in datasets. Use visualization to uncover insights and generate hypotheses. Understand how to use pandas and NumPy for data manipulation and analysis. Practice conducting comprehensive EDA on various types of datasets and communicating your findings effectively.' },
      { title: 'Statistical modeling', hours: 2.0, description: 'Learn fundamental statistical concepts including hypothesis testing, confidence intervals, and p-values. Understand different types of statistical models including linear regression, logistic regression, and time series models. Master techniques for model selection, validation, and interpretation. Learn how to assess model assumptions and diagnose problems. Practice building and evaluating statistical models to answer real-world questions.' },
      { title: 'Machine learning algorithms', hours: 3.0, description: 'Explore supervised learning algorithms including linear regression, decision trees, random forests, and support vector machines. Learn about unsupervised learning including k-means clustering and dimensionality reduction. Understand neural networks and deep learning basics. Master techniques for training, validating, and tuning machine learning models. Practice implementing algorithms using scikit-learn and understanding when to use each approach.' },
      { title: 'Data visualization', hours: 2.0, description: 'Create compelling visualizations using Matplotlib, Seaborn, and Plotly. Learn principles of effective data visualization and how to choose the right chart types. Master techniques for creating publication-quality visualizations that communicate insights clearly. Understand how to use color, layout, and annotations effectively. Practice creating dashboards and interactive visualizations that tell data-driven stories.' },
      { title: 'Big data tools', hours: 1.5, description: 'Introduction to big data tools and technologies including Apache Spark, Hadoop, and cloud-based solutions. Learn how to work with large datasets that don\'t fit in memory. Understand distributed computing concepts and how to scale data processing. Explore techniques for handling streaming data and real-time analytics. Learn about data lakes, data warehouses, and modern data architectures.' },
      { title: 'Predictive analytics', hours: 1.5, description: 'Learn how to build predictive models that forecast future outcomes. Understand time series forecasting, classification, and regression techniques. Master techniques for feature engineering and model optimization. Learn how to evaluate model performance and handle imbalanced datasets. Practice building end-to-end predictive analytics pipelines from data preparation to model deployment.' },
      { title: 'Capstone project', hours: 0.5, description: 'Apply all your data science skills to solve a real-world problem in a comprehensive capstone project. Work through the complete data science workflow from problem definition to solution deployment. Create a portfolio piece that demonstrates your skills to potential employers. Receive guidance on project selection, execution, and presentation. Learn how to document your work and communicate your findings effectively.' }
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
    description: 'Create high-converting digital marketing campaigns. Master SEO, social media marketing, paid advertising, and analytics to drive measurable business results.',
    whatYoullLearn: [
      'Optimize websites for search engines and create content that ranks',
      'Execute social media marketing strategies across major platforms',
      'Build and automate high-converting email marketing campaigns',
      'Measure and analyze marketing performance using Google Analytics and other tools'
    ],
    skillsYoullGain: ['SEO', 'Social Media Marketing', 'Content Marketing', 'Google Ads', 'Email Marketing', 'Marketing Analytics', 'PPC Advertising', 'Conversion Optimization', 'Marketing Automation', 'Digital Strategy'],
    syllabus: [
      { title: 'Marketing fundamentals', hours: 1.5, description: 'Understand core marketing concepts including the marketing mix, customer journey, and buyer personas. Learn about market segmentation, targeting, and positioning strategies. Explore how digital marketing differs from traditional marketing. Understand customer psychology and what motivates purchasing decisions. Learn how to develop marketing strategies that align with business objectives and customer needs.' },
      { title: 'SEO and content strategy', hours: 2.0, description: 'Master search engine optimization techniques including keyword research, on-page SEO, and technical SEO. Learn how to create content that ranks in search engines and drives organic traffic. Understand link building strategies and how to earn quality backlinks. Explore content marketing strategies including blog posts, videos, and infographics. Learn how to optimize content for featured snippets and voice search.' },
      { title: 'Social media marketing', hours: 2.0, description: 'Develop social media marketing strategies for major platforms including Facebook, Instagram, Twitter, LinkedIn, and TikTok. Learn platform-specific best practices and content formats. Understand how to build and engage communities, create viral content, and manage social media crises. Master social media advertising and influencer marketing. Learn how to measure social media ROI and optimize your social media presence.' },
      { title: 'Email marketing campaigns', hours: 1.5, description: 'Learn how to build and grow email subscriber lists using lead magnets and opt-in strategies. Master email campaign design including subject lines, copywriting, and CTAs. Understand email automation workflows and segmentation strategies. Learn how to write emails that convert and avoid spam filters. Explore A/B testing and email analytics to improve campaign performance.' },
      { title: 'Paid advertising (PPC)', hours: 1.5, description: 'Master pay-per-click advertising on Google Ads and social media platforms. Learn how to set up campaigns, conduct keyword research, and write compelling ad copy. Understand bidding strategies, ad targeting, and budget optimization. Explore display advertising, remarketing, and shopping ads. Learn how to measure PPC performance and optimize campaigns for better ROI.' },
      { title: 'Analytics and measurement', hours: 1.0, description: 'Learn how to set up and use Google Analytics to track website performance and user behavior. Understand key marketing metrics including traffic, conversions, bounce rate, and customer lifetime value. Master techniques for tracking marketing campaigns and attributing conversions. Learn how to create custom reports and dashboards. Understand how to use data to make informed marketing decisions and optimize strategies.' },
      { title: 'Conversion optimization', hours: 1.0, description: 'Learn how to optimize websites and landing pages to increase conversions. Understand conversion rate optimization (CRO) principles and techniques. Master A/B testing and multivariate testing methodologies. Learn about user experience (UX) principles that drive conversions. Explore techniques for reducing friction, building trust, and creating compelling offers that convert visitors into customers.' },
      { title: 'Marketing automation', hours: 0.5, description: 'Introduction to marketing automation platforms and how they can streamline your marketing efforts. Learn about lead nurturing workflows, drip campaigns, and automated email sequences. Understand how to score leads and route them to sales teams. Explore how automation can personalize customer experiences at scale. Learn how to set up basic automation workflows that save time and improve results.' }
    ],
    price: 84,
    students: 13456
  }
];

export const categories = ['All', 'AI', 'Design', 'Business', 'Tech', 'Finance', 'Personal Growth'];

export const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];

