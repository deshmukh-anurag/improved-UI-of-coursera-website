import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Users, Check, ArrowLeft, BookOpen } from 'lucide-react';
import { courses } from '../data/courses';
import SyllabusAccordion from '../components/SyllabusAccordion';
import InstructorCard from '../components/InstructorCard';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <Link
            to="/courses"
            className="text-primary-light dark:text-primary-dark hover:underline"
          >
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-light/20 via-white to-primary-dark/20 dark:from-primary-dark/30 dark:via-background-dark dark:to-primary-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="inline-block px-4 py-2 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-semibold mb-4">
                  {course.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(course.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 dark:fill-gray-700 text-gray-200 dark:text-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      ({course.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                  {course.students && (
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-5 h-5" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  )}
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                    {course.level}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enrollment Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800">
                {course.price && (
                  <div className="text-4xl font-bold mb-4">
                    ₹{course.price}
                    <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">
                      {' '}
                      one-time
                    </span>
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-light to-primary-dark text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow mb-4"
                >
                  Enroll Now
                </motion.button>
                <button className="w-full py-4 bg-white dark:bg-card-dark border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 rounded-xl font-semibold hover:border-primary-light dark:hover:border-primary-dark transition-colors">
                  Add to Wishlist
                </button>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              {course.whatYoullLearn && course.whatYoullLearn.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6">What you'll learn</h2>
                  <div className="space-y-3">
                    {course.whatYoullLearn.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Skills You'll Gain */}
              {course.skillsYoullGain && course.skillsYoullGain.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Skills you'll gain</h2>
                  <div className="flex flex-wrap gap-3">
                    {course.skillsYoullGain.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Syllabus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <BookOpen className="w-6 h-6" />
                  <h2 className="text-3xl font-bold">Course Content</h2>
                </div>
                <SyllabusAccordion items={course.syllabus} />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <InstructorCard name={course.instructor} bio={course.instructorBio || ''} />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Enroll Button (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            {course.price && (
                <div className="text-2xl font-bold">₹{course.price}</div>
            )}
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white rounded-xl font-semibold shadow-lg"
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

