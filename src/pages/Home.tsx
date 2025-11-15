import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import CategoryChip from '../components/CategoryChip';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import { courses, categories } from '../data/courses';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const featuredCourses = courses.slice(0, 6);

  const filteredCourses =
    selectedCategory === 'All'
      ? featuredCourses
      : featuredCourses.filter((course) => course.category === selectedCategory);

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Software Engineer',
      content:
        'The courses here transformed my career. The instructors are world-class and the content is always up-to-date with industry standards.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Product Designer',
      content:
        'I love how practical and hands-on the courses are. I was able to apply what I learned immediately in my projects.',
      rating: 5,
    },
    {
      name: 'Amanda Foster',
      role: 'Business Analyst',
      content:
        'The platform is intuitive and the learning experience is smooth. Highly recommend to anyone looking to upskill.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-background-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Learn Without
              <span className="block text-primary-light dark:text-primary-dark">
                Limits
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Discover thousands of courses from expert instructors. Build skills that matter for your future.
            </p>
            <div className="mb-12">
              <SearchBar className="max-w-2xl mx-auto" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-light to-primary-dark text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-card-dark text-gray-900 dark:text-gray-100 rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-800 hover:border-primary-light dark:hover:border-primary-dark transition-colors flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <CategoryChip
                key={category}
                label={category}
                isActive={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50 dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Courses</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Handpicked courses to help you achieve your goals
              </p>
            </div>
            <Link
              to="/courses"
              className="hidden md:flex items-center space-x-2 text-primary-light dark:text-primary-dark font-semibold hover:underline"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 text-primary-light dark:text-primary-dark font-semibold hover:underline"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">What Students Say</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of satisfied learners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-light to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Learning Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join over 100,000 students already learning on Coursera
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/courses"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary-light rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <span>Browse Courses</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

