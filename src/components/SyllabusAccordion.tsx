import { ChevronUp, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SyllabusItem } from '../data/courses';

interface SyllabusAccordionProps {
  items: SyllabusItem[];
}

const SyllabusAccordion = ({ items }: SyllabusAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex items-center space-x-4 flex-1">
              <span className="font-medium text-gray-900 dark:text-gray-100 text-left">
                {index + 1}. {item.title}
              </span>
              <div className="flex items-center space-x-1.5 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{item.hours} {item.hours === 1 ? 'hour' : 'hours'}</span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: openIndex === index ? 0 : 180 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
                  {item.description || 'This module covers the essential concepts and practical applications of this topic.'}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAccordion;

