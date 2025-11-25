import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Play, Clock, CheckCircle, User } from 'lucide-react';
import { courses, categories } from '../data/courses';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock user data - showing logged in user
  const user = {
    name: 'Rahul Yadav',
    email: 'cs23b1059@iiitr.ac.in',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    enrolledCourses: [
      {
        ...courses[0], // Complete Web Development Bootcamp
        progress: 65,
        lastAccessed: '2 hours ago',
        nextLesson: 'React Components and State'
      },
      {
        ...courses[1], // Data Science and Machine Learning
        progress: 30,
        lastAccessed: '1 day ago',
        nextLesson: 'Introduction to Pandas'
      },
      {
        ...courses[2], // AWS Cloud Practitioner
        progress: 80,
        lastAccessed: '3 hours ago',
        nextLesson: 'Final Exam Preparation'
      }
    ]
  };

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  // Show only first 4 courses on home page
  const displayedCourses = filteredCourses.slice(0, 4);
  const hasMoreCourses = filteredCourses.length > 4;

  const featuredCourses = courses.slice(0, 8);
  const totalStudents = courses.reduce(
    (sum, course) => sum + (course.students || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Updated for logged in user */}
      <section className="relative bg-gradient-to-br from-primary-light via-primary-dark to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full border-4 border-white/20"
                />
                <div>
                  <h2 className="text-2xl font-semibold">Welcome back, {user.name}!</h2>
                  <p className="text-blue-100">Ready to continue your learning journey?</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Continue Learning & Achieve Your Goals
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Pick up where you left off and discover new courses to advance your skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/dashboard"
                  className="px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Go to Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Browse Courses
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-40 w-48 h-48 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* My Learning Section - New section for enrolled courses */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                My Learning
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Continue your enrolled courses
              </p>
            </div>
            <Link
              to="/dashboard"
              className="text-primary-light hover:text-primary-dark font-semibold flex items-center space-x-1"
            >
              <span>View all</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.enrolledCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48">
                  <img
                    src={course.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400'}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-light ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary-light text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.progress}% Complete
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    By {course.instructor}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-light h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {course.lastAccessed}
                    </div>
                    <Link
                      to={`/courses/${course.id}/learn`}
                      className="text-primary-light hover:text-primary-dark font-semibold"
                    >
                      Continue
                    </Link>
                  </div>

                  <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Next:</span> {course.nextLesson}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <BookOpen className="w-12 h-12 mx-auto text-primary-light" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {courses.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Courses</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <Users className="w-12 h-12 mx-auto text-primary-light" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {(totalStudents / 1000).toFixed(0)}K+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Students</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <Award className="w-12 h-12 mx-auto text-primary-light" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Expert Instructors
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <TrendingUp className="w-12 h-12 mx-auto text-primary-light" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                98%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section - Limited to 4 courses */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore By Category
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find the perfect course for your learning goals
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {displayedCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {/* View All Courses Button */}
          {hasMoreCourses && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Learn With Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Transform your career with world-class education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Expert-Led Courses
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn from industry professionals with real-world experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Recognized Certificates
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Earn certificates that boost your resume and career prospects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Flexible Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Study at your own pace with lifetime access to course materials
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats for User */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md"
            >
              <BookOpen className="w-8 h-8 mx-auto text-primary-light mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {user.enrolledCourses.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Enrolled Courses</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md"
            >
              <CheckCircle className="w-8 h-8 mx-auto text-green-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(user.enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / user.enrolledCourses.length)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg Progress</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md"
            >
              <Clock className="w-8 h-8 mx-auto text-blue-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">24</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hours Learned</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md"
            >
              <Award className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certificates</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-light to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students already learning on our platform
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

