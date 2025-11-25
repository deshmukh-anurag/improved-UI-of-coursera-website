import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import FilterSidebar from '../components/FilterSidebar';
import SearchBar from '../components/SearchBar';
import { courses } from '../data/courses';

const CourseCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'All'
  );
  const [selectedLevel, setSelectedLevel] = useState(
    searchParams.get('level') || 'All'
  );
  const [minRating, setMinRating] = useState(
    parseFloat(searchParams.get('rating') || '0')
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );
  const navigate = useNavigate();

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesRating = course.rating >= minRating;
      const matchesSearch =
        searchQuery === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLevel && matchesRating && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, minRating, searchQuery]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'All') params.set('category', selectedCategory);
    if (selectedLevel !== 'All') params.set('level', selectedLevel);
    if (minRating > 0) params.set('rating', minRating.toString());
    if (searchQuery) params.set('search', searchQuery);
    setSearchParams(params);
  }, [selectedCategory, selectedLevel, minRating, searchQuery, setSearchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/courses') {
        navigate('/', { replace: true });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedLevel('All');
    setMinRating(0);
    setSearchQuery('');
  };

  const activeFiltersCount =
    (selectedCategory !== 'All' ? 1 : 0) +
    (selectedLevel !== 'All' ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (searchQuery ? 1 : 0);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Catalog</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Explore our collection of {courses.length} courses
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={setSearchQuery}
            placeholder="Search courses, instructors, or topics..."
          />
        </motion.div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6 flex items-center justify-between">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-light dark:hover:border-primary-dark transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="px-2 py-0.5 bg-primary-light dark:bg-primary-dark text-white text-xs rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
          {activeFiltersCount > 0 && (
            <button
              onClick={handleReset}
              className="text-sm text-primary-light dark:text-primary-dark hover:underline flex items-center space-x-1"
            >
              <X className="w-4 h-4" />
              <span>Clear all</span>
            </button>
          )}
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
            minRating={minRating}
            onCategoryChange={setSelectedCategory}
            onLevelChange={setSelectedLevel}
            onRatingChange={setMinRating}
            onReset={handleReset}
          />

          {/* Course Grid */}
          <div className="flex-1">
            {activeFiltersCount > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedCategory !== 'All' && (
                  <span className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium flex items-center space-x-2">
                    <span>{selectedCategory}</span>
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className="hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedLevel !== 'All' && (
                  <span className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium flex items-center space-x-2">
                    <span>{selectedLevel}</span>
                    <button
                      onClick={() => setSelectedLevel('All')}
                      className="hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {minRating > 0 && (
                  <span className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium flex items-center space-x-2">
                    <span>Rating ≥ {minRating.toFixed(1)}</span>
                    <button
                      onClick={() => setMinRating(0)}
                      className="hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {filteredCourses.length > 0 ? (
              <>
                <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                  Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                  ))}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No courses found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;

