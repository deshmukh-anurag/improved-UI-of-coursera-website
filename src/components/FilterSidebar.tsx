import { X } from 'lucide-react';
import { categories, difficultyLevels } from '../data/courses';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  selectedLevel: string;
  minRating: number;
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
  onRatingChange: (rating: number) => void;
  onReset: () => void;
}

const FilterSidebar = ({
  isOpen,
  onClose,
  selectedCategory,
  selectedLevel,
  minRating,
  onCategoryChange,
  onLevelChange,
  onRatingChange,
  onReset,
}: FilterSidebarProps) => {
  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-card-dark z-50 shadow-2xl overflow-y-auto md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Filters</h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent
                  selectedCategory={selectedCategory}
                  selectedLevel={selectedLevel}
                  minRating={minRating}
                  onCategoryChange={onCategoryChange}
                  onLevelChange={onLevelChange}
                  onRatingChange={onRatingChange}
                  onReset={onReset}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <FilterContent
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
            minRating={minRating}
            onCategoryChange={onCategoryChange}
            onLevelChange={onLevelChange}
            onRatingChange={onRatingChange}
            onReset={onReset}
          />
        </div>
      </div>
    </>
  );
};

const FilterContent = ({
  selectedCategory,
  selectedLevel,
  minRating,
  onCategoryChange,
  onLevelChange,
  onRatingChange,
  onReset,
}: Omit<FilterSidebarProps, 'isOpen' | 'onClose'>) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={onReset}
          className="text-sm text-primary-light dark:text-primary-dark hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Category */}
      <div>
        <h4 className="font-semibold mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 text-primary-light dark:text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty Level */}
      <div>
        <h4 className="font-semibold mb-3">Difficulty</h4>
        <div className="space-y-2">
          {difficultyLevels.map((level) => (
            <label key={level} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="level"
                value={level}
                checked={selectedLevel === level}
                onChange={(e) => onLevelChange(e.target.value)}
                className="w-4 h-4 text-primary-light dark:text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{level}</span>
            </label>
          ))}
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="level"
              value="All"
              checked={selectedLevel === 'All'}
              onChange={(e) => onLevelChange(e.target.value)}
              className="w-4 h-4 text-primary-light dark:text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">All Levels</span>
          </label>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4 className="font-semibold mb-3">Minimum Rating</h4>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={minRating}
          onChange={(e) => onRatingChange(parseFloat(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>0</span>
          <span className="font-semibold">{minRating.toFixed(1)}</span>
          <span>5.0</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

