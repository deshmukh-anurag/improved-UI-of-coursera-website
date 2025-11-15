import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  index?: number;
}

const TestimonialCard = ({ name, role, content, rating, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 dark:fill-gray-700 text-gray-200 dark:text-gray-700'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{content}"
      </p>
      <div>
        <div className="font-semibold text-gray-900 dark:text-gray-100">{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

