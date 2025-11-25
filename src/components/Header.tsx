import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Moon, Sun, User, ShoppingCart, Bell, Globe, BookOpen, Briefcase, GraduationCap, Award, TrendingUp, Video, FileText, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showExploreDropdown, setShowExploreDropdown] = useState(false);
    const [showDegreesDropdown, setShowDegreesDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMyLearning, setShowMyLearning] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Mock user data - simulating logged in user
    const user = {
        name: 'Rahul Yadav',
        email: 'cs23b1059@iiitr.ac.in',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        enrolledCourses: [
            { id: 'ai-101', title: 'Foundations of Artificial Intelligence', progress: 75 },
            { id: 'python-for-everybody', title: 'Python for Everybody', progress: 45 },
            { id: 'design-mastery', title: 'Modern UI/UX Design Principles', progress: 30 }
        ],
        isLoggedIn: true
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const isActive = (path: string) => location.pathname === path;

    const exploreCategories = [
        { name: 'Data Science', icon: TrendingUp, link: '/courses?category=Tech', description: 'Learn Python, R, SQL, and more' },
        { name: 'Business', icon: Briefcase, link: '/courses?category=Business', description: 'MBA & business strategy courses' },
        { name: 'AI & Machine Learning', icon: BookOpen, link: '/courses?category=AI', description: 'Master artificial intelligence' },
        { name: 'Design', icon: Award, link: '/courses?category=Design', description: 'UI/UX and graphic design' },
        { name: 'Finance', icon: TrendingUp, link: '/courses?category=Finance', description: 'Investing & financial planning' },
        { name: 'Personal Development', icon: GraduationCap, link: '/courses?category=Personal Growth', description: 'Productivity & life skills' },
    ];

    const degreePrograms = [
        { name: 'Bachelor\'s Degrees', icon: GraduationCap, link: '/degrees/bachelors', description: 'Earn a bachelor\'s degree online' },
        { name: 'Master\'s Degrees', icon: Award, link: '/degrees/masters', description: 'Advance your career with a master\'s' },
        { name: 'Postgraduate Diplomas', icon: FileText, link: '/degrees/diplomas', description: 'Professional certifications' },
        { name: 'Professional Certificates', icon: Award, link: '/degrees/certificates', description: 'Industry-recognized credentials' },
    ];

    const notifications = [
        { id: 1, type: 'course', message: 'New course added: Advanced AI Techniques', time: '2h ago' },
        { id: 2, type: 'update', message: 'Your certificate is ready for download', time: '5h ago' },
        { id: 3, type: 'reminder', message: 'Continue your Python course', time: '1d ago' },
    ];

    return (
        <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-primary-dark rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">C</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white hidden sm:block">
                            CourseHub
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {/* Explore Megamenu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowExploreDropdown(true)}
                            onMouseLeave={() => setShowExploreDropdown(false)}
                        >
                            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors flex items-center space-x-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="font-medium">Explore</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {showExploreDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-4"
                                    >
                                        <div className="px-4 pb-2 mb-2 border-b border-gray-200 dark:border-gray-700">
                                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                                Browse by Subject
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 px-4">
                                            {exploreCategories.map((category) => (
                                                <Link
                                                    key={category.name}
                                                    to={category.link}
                                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                                >
                                                    <category.icon className="w-5 h-5 text-primary-light dark:text-primary-dark flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                    <div>
                                                        <div className="font-medium text-gray-900 dark:text-white text-sm">
                                                            {category.name}
                                                        </div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                                            {category.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-3 px-4">
                                            <Link
                                                to="/courses"
                                                className="flex items-center justify-between text-primary-light dark:text-primary-dark font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                                            >
                                                <span>Browse All Courses</span>
                                                <span>→</span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Degrees Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowDegreesDropdown(true)}
                            onMouseLeave={() => setShowDegreesDropdown(false)}
                        >
                            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors flex items-center space-x-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="font-medium">Degrees</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {showDegreesDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-3"
                                    >
                                        {degreePrograms.map((program) => (
                                            <Link
                                                key={program.name}
                                                to={program.link}
                                                className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                            >
                                                <program.icon className="w-5 h-5 text-primary-light dark:text-primary-dark flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <div>
                                                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                                                        {program.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                                        {program.description}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Enterprise Link */}
                        <Link
                            to="/enterprise"
                            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark rounded-lg font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            For Enterprise
                        </Link>

                        {/* Find Your Course Link */}
                        <Link
                            to="/courses"
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isActive('/courses')
                                ? 'text-primary-light dark:text-primary-dark bg-blue-50 dark:bg-blue-900/30'
                                : 'text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            Find Your Course
                        </Link>
                    </nav>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex items-center flex-1 max-w-lg mx-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="What do you want to learn?"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                            />
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-2">
                        {/* My Learning Dropdown - Only show if logged in */}
                        {user.isLoggedIn && (
                            <div
                                className="hidden lg:block relative"
                                onMouseEnter={() => setShowMyLearning(true)}
                                onMouseLeave={() => setShowMyLearning(false)}
                            >
                                <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors flex items-center space-x-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <BookOpen className="w-4 h-4" />
                                    <span className="font-medium">My Learning</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                <AnimatePresence>
                                    {showMyLearning && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-4"
                                        >
                                            <div className="px-4 pb-2 mb-3 border-b border-gray-200 dark:border-gray-700">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">My Courses</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Continue learning where you left off</p>
                                            </div>

                                            <div className="max-h-80 overflow-y-auto">
                                                {user.enrolledCourses.map((course) => (
                                                    <Link
                                                        key={course.id}
                                                        to={`/courses/${course.id}`}
                                                        className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                                                    >
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-12 h-12 bg-gradient-to-br from-primary-light/20 to-primary-dark/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <BookOpen className="w-6 h-6 text-primary-light" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                                                                    {course.title}
                                                                </h4>
                                                                <div className="mt-2">
                                                                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                                                        <span>Progress</span>
                                                                        <span>{course.progress}%</span>
                                                                    </div>
                                                                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                                                        <div
                                                                            className="bg-primary-light h-2 rounded-full transition-all duration-300"
                                                                            style={{ width: `${course.progress}%` }}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>

                                            <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3 px-4">
                                                <Link
                                                    to="/my-courses"
                                                    className="flex items-center justify-between text-primary-light dark:text-primary-dark font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                                                >
                                                    <span>View All My Courses</span>
                                                    <span>→</span>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* Online Degrees Badge */}
                        <Link
                            to="/degrees"
                            className="hidden xl:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:shadow-md transition-all"
                        >
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-sm font-semibold">Online Degrees</span>
                        </Link>

                        {/* Language Selector */}
                        <button className="hidden lg:flex items-center space-x-1 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <Globe className="w-5 h-5" />
                        </button>

                        {/* Notifications */}
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
                            >
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            <AnimatePresence>
                                {showNotifications && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2"
                                    >
                                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                                        </div>
                                        <div className="max-h-96 overflow-y-auto">
                                            {notifications.map((notification) => (
                                                <div
                                                    key={notification.id}
                                                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                                                >
                                                    <p className="text-sm text-gray-900 dark:text-white">
                                                        {notification.message}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                        {notification.time}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2">
                                            <button className="text-sm text-primary-light dark:text-primary-dark font-semibold hover:underline">
                                                View all notifications
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        {/* Cart */}
                        <button className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-5 h-5 bg-primary-light text-white text-xs rounded-full flex items-center justify-center font-semibold">
                                0
                            </span>
                        </button>

                        {/* User Profile Dropdown - Show when logged in */}
                        {user.isLoggedIn ? (
                            <div className="hidden lg:block relative">
                                <button
                                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                    className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <ChevronDown className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                </button>

                                <AnimatePresence>
                                    {isProfileDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2"
                                        >
                                            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center space-x-3">
                                                    <img
                                                        src={user.avatar}
                                                        alt={user.name}
                                                        className="w-10 h-10 rounded-full"
                                                    />
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {user.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                to="/dashboard"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                onClick={() => setIsProfileDropdownOpen(false)}
                                            >
                                                <BarChart3 className="w-4 h-4 mr-3" />
                                                Dashboard
                                            </Link>
                                            <Link
                                                to="/my-courses"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                onClick={() => setIsProfileDropdownOpen(false)}
                                            >
                                                <BookOpen className="w-4 h-4 mr-3" />
                                                My Learning
                                            </Link>
                                            <Link
                                                to="/profile"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                onClick={() => setIsProfileDropdownOpen(false)}
                                            >
                                                <User className="w-4 h-4 mr-3" />
                                                Profile
                                            </Link>
                                            <Link
                                                to="/settings"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                onClick={() => setIsProfileDropdownOpen(false)}
                                            >
                                                <Settings className="w-4 h-4 mr-3" />
                                                Settings
                                            </Link>
                                            <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                                                <button
                                                    onClick={() => {
                                                        setIsProfileDropdownOpen(false);
                                                        // Handle logout
                                                    }}
                                                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                >
                                                    <LogOut className="w-4 h-4 mr-3" />
                                                    Sign Out
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            /* Login/Sign Up - for guests */
                            <div className="hidden lg:flex items-center space-x-2">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-primary-light dark:text-primary-dark font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    Log In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-6 py-2 bg-primary-light hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
                                    Sign Up
                                </Link>
                            </div>
                        )}

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden pb-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 max-h-[calc(100vh-8rem)] overflow-y-auto"
                    >
                        <nav className="container mx-auto px-4 py-4 space-y-2">
                            {/* Mobile User Section - Show if logged in */}
                            {user.isLoggedIn && (
                                <div className="pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white">{user.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                                        </div>
                                    </div>
                                    <Link
                                        to="/my-courses"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-2 text-primary-light dark:text-primary-dark font-semibold bg-blue-50 dark:bg-blue-900/30 rounded-lg transition-colors"
                                    >
                                        My Learning ({user.enrolledCourses.length} courses)
                                    </Link>
                                </div>
                            )}

                            <Link
                                to="/courses"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/courses')
                                    ? 'text-primary-light dark:text-primary-dark bg-blue-50 dark:bg-blue-900/30'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                Find Your Course
                            </Link>

                            <Link
                                to="/degrees"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                Online Degrees
                            </Link>

                            <Link
                                to="/enterprise"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                For Enterprise
                            </Link>

                            <div className="px-4 py-2">
                                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                    Categories
                                </p>
                                <div className="space-y-2">
                                    {exploreCategories.map((category) => (
                                        <Link
                                            key={category.name}
                                            to={category.link}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                        >
                                            <category.icon className="w-4 h-4 text-primary-light" />
                                            <span>{category.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/about')
                                    ? 'text-primary-light dark:text-primary-dark bg-blue-50 dark:bg-blue-900/30'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                About
                            </Link>

                            <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                                <Link
                                    to="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-4 py-3 text-center text-primary-light dark:text-primary-dark font-semibold bg-blue-50 dark:bg-blue-900/30 rounded-lg transition-colors"
                                >
                                    Log In
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-4 py-3 text-center bg-primary-light hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
};

export default Header;
