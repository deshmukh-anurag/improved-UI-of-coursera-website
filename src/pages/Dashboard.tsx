import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Clock,
    Award,
    Zap,
    Play,
    BarChart3,
    Trophy,
    Flame // Changed from Fire to Flame
} from 'lucide-react';
import CircularProgress from '../components/CircularProgress';
import StreakCalendar from '../components/StreakCalendar';
import LearningChart from '../components/LearningChart';

const Dashboard = () => {
    // Mock user data
    const user = {
        name: 'Rahul Yadav',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        currentStreak: 12,
        longestStreak: 28,
        totalHours: 156,
        completedCourses: 5,
        certificates: 3,
        enrolledCourses: [
            {
                id: 1,
                title: 'Complete Web Development Bootcamp',
                instructor: 'Dr. Angela Yu',
                progress: 75,
                totalLessons: 65,
                completedLessons: 49,
                timeSpent: '45h 30m',
                lastAccessed: '2 hours ago',
                nextLesson: 'Advanced React Hooks',
                thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400'
            },
            {
                id: 2,
                title: 'Data Science and Machine Learning',
                instructor: 'Jose Portilla',
                progress: 45,
                totalLessons: 42,
                completedLessons: 19,
                timeSpent: '32h 15m',
                lastAccessed: '1 day ago',
                nextLesson: 'Neural Networks Basics',
                thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
            },
            {
                id: 3,
                title: 'AWS Cloud Practitioner',
                instructor: 'Stephane Maarek',
                progress: 90,
                totalLessons: 24,
                completedLessons: 22,
                timeSpent: '28h 45m',
                lastAccessed: '3 hours ago',
                nextLesson: 'Final Exam Preparation',
                thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400'
            }
        ],
        weeklyGoal: {
            target: 10,
            completed: 7.5,
            percentage: 75
        },
        recentAchievements: [
            { title: 'React Master', description: 'Completed React fundamentals', icon: '⚛️', date: '2 days ago' },
            { title: '7-day Streak', description: 'Learned for 7 consecutive days', icon: '🔥', date: '1 week ago' },
            { title: 'Quiz Champion', description: 'Scored 100% on 5 quizzes', icon: '🏆', date: '1 week ago' }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-16 h-16 rounded-full border-4 border-primary-light/20"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Welcome back, {user.name}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                Continue your learning journey
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 bg-orange-100 dark:bg-orange-900 px-3 py-2 rounded-lg">
                            <Flame className="w-5 h-5 text-orange-500" />
                            <span className="font-bold text-orange-700 dark:text-orange-300">
                                {user.currentStreak} day streak
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Hours</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.totalHours}</p>
                            </div>
                            <Clock className="w-8 h-8 text-blue-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.completedCourses}</p>
                            </div>
                            <BookOpen className="w-8 h-8 text-green-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Certificates</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.certificates}</p>
                            </div>
                            <Award className="w-8 h-8 text-yellow-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Best Streak</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.longestStreak}</p>
                            </div>
                            <Zap className="w-8 h-8 text-purple-500" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    {/* Weekly Goal Progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Weekly Goal</h3>
                            <div className="flex items-center justify-center mb-4">
                                <CircularProgress
                                    percentage={user.weeklyGoal.percentage}
                                    size={120}
                                    strokeWidth={8}
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {user.weeklyGoal.completed}h / {user.weeklyGoal.target}h
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {user.weeklyGoal.target - user.weeklyGoal.completed}h remaining
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Learning Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Learning Progress</h3>
                                <BarChart3 className="w-5 h-5 text-gray-500" />
                            </div>
                            <LearningChart />
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Current Courses with Circular Progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Continue Learning</h3>
                                <Link to="/courses" className="text-primary-light hover:text-primary-dark text-sm font-semibold">
                                    View All
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {user.enrolledCourses.map((course) => (
                                    <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                                        <div className="relative">
                                            <CircularProgress
                                                percentage={course.progress}
                                                size={60}
                                                strokeWidth={4}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <img
                                                    src={course.thumbnail}
                                                    alt=""
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                                                {course.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {course.completedLessons}/{course.totalLessons} lessons • {course.timeSpent}
                                            </p>
                                            <p className="text-xs text-primary-light">
                                                Next: {course.nextLesson}
                                            </p>
                                        </div>
                                        <Link
                                            to={`/courses/${course.id}/learn`}
                                            className="p-2 bg-primary-light text-white rounded-full hover:bg-primary-dark transition-colors"
                                        >
                                            <Play className="w-4 h-4" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Streak Calendar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Learning Streak</h3>
                                <div className="flex items-center space-x-1 text-orange-500">
                                    <Flame className="w-5 h-5" />
                                    <span className="font-bold">{user.currentStreak}</span>
                                </div>
                            </div>
                            <StreakCalendar />
                        </div>
                    </motion.div>
                </div>

                {/* Recent Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Achievements</h3>
                        <Trophy className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {user.recentAchievements.map((achievement, index) => (
                            <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="text-2xl">{achievement.icon}</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">{achievement.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
