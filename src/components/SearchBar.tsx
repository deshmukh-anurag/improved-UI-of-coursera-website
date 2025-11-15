import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (query: string) => void;
}

const SearchBar = ({ onSearch, placeholder = 'Search courses...', className = '', value, onChange }: SearchBarProps) => {
  const [internalQuery, setInternalQuery] = useState('');
  const navigate = useNavigate();
  const query = value !== undefined ? value : internalQuery;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/courses?search=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${className}`}
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            const newValue = e.target.value;
            if (onChange) {
              onChange(newValue);
            } else {
              setInternalQuery(newValue);
            }
          }}
          placeholder={placeholder}
          className="w-full px-6 py-4 pl-14 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark text-lg shadow-lg"
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-primary-light to-primary-dark text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
      >
        Search
      </motion.button>
    </motion.form>
  );
};

export default SearchBar;

