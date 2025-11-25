import { Link } from 'react-router-dom';
import { Clock, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/courses/${course.id}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
          {/* Thumbnail with Image */}
          <div className="relative h-48 bg-gradient-to-br from-primary-light/20 to-primary-dark/20 overflow-hidden">
            {course.thumbnail && course.thumbnail.startsWith('http') ? (
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`absolute inset-0 flex items-center justify-center ${course.thumbnail && course.thumbnail.startsWith('http') ? 'hidden' : ''}`}>
              <div className="text-6xl font-bold text-primary-light/30 dark:text-primary-dark/30">
                {course.category.charAt(0)}
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/90 dark:bg-card-dark/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-md">
                {course.level}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-primary-light dark:text-primary-dark uppercase tracking-wide">
                {course.category}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{course.rating}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({course.reviews.toLocaleString()})
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
              {course.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {course.instructor}
            </p>

            <div className="mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                {course.students && (
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                )}
              </div>
              {course.price && (
                <span className="font-bold text-lg text-primary-light dark:text-primary-dark">
                  ₹{course.price}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;

