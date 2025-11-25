import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, TrendingUp, Play, Clock, Flame } from 'lucide-react';
import { courses, categories } from '../data/courses';
import CourseCard from '../components/CourseCard';
import CircularProgress from '../components/CircularProgress';

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    // Mock user enrolled courses
    const userEnrolledCourses = [
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
        }
    ];

    const filteredCourses =
        selectedCategory === 'All'
            ? courses
            : courses.filter((course) => course.category === selectedCategory);

    // Show only first 4 courses on home page
    const displayedCourses = filteredCourses.slice(0, 4);
    const hasMoreCourses = filteredCourses.length > 4;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            if (window.location.pathname === '/courses') {
                // If still on /courses after back, force redirect to home
                navigate('/', { replace: true });
            }
        };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                {/* Quick Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Enrolled</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">{userEnrolledCourses.length}</p>
                            </div>
                            <BookOpen className="w-6 h-6 text-primary-light" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Avg Progress</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">
                                    {Math.round(userEnrolledCourses.reduce((sum, course) => sum + course.progress, 0) / userEnrolledCourses.length)}%
                                </p>
                            </div>
                            <TrendingUp className="w-6 h-6 text-green-500" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Hours Learned</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">78</p>
                            </div>
                            <Clock className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Streak</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">12</p>
                            </div>
                            <Flame className="w-6 h-6 text-orange-500" />
                        </div>
                    </div>
                </motion.div>

                {/* My Learning Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Continue Learning</h2>
                            <p className="text-gray-600 dark:text-gray-400">Pick up where you left off</p>
                        </div>
                        <Link to="/dashboard" className="text-primary-light hover:text-primary-dark font-semibold">
                            View Dashboard
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {userEnrolledCourses.map((course) => (
                            <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all">
                                <div className="relative">
                                    <CircularProgress
                                        percentage={course.progress}
                                        size={80}
                                        strokeWidth={6}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img
                                            src={course.thumbnail}
                                            alt=""
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {course.completedLessons}/{course.totalLessons} lessons • {course.timeSpent}
                                    </p>
                                    <p className="text-xs text-primary-light">
                                        Next: {course.nextLesson}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                        Last accessed: {course.lastAccessed}
                                    </p>
                                </div>
                                <Link
                                    to={`/courses/${course.id}/learn`}
                                    className="p-3 bg-primary-light text-white rounded-full hover:bg-primary-dark transition-colors"
                                >
                                    <Play className="w-5 h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Explore Courses
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Discover thousands of courses from expert instructors
                    </p>
                </div>

                {/* Category Filters */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-primary-light text-white shadow-lg scale-105'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {displayedCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                    ))}
                </div>

                {/* View All Courses Button */}
                {hasMoreCourses && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <Link
                            to="/courses"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-light hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            <span>View All Courses</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                            Showing {displayedCourses.length} of {filteredCourses.length} courses
                            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                        </p>
                    </motion.div>
                )}

                {filteredCourses.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            No courses found in this category
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;