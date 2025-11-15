import { motion } from 'framer-motion';

interface CategoryChipProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryChip = ({ label, isActive = false, onClick }: CategoryChipProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
        ${
          isActive
            ? 'bg-gradient-to-r from-primary-light to-primary-dark text-white shadow-lg'
            : 'bg-white dark:bg-card-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-primary-light dark:hover:border-primary-dark'
        }
      `}
    >
      {label}
    </motion.button>
  );
};

export default CategoryChip;

