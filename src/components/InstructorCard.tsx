import { motion } from 'framer-motion';

interface InstructorCardProps {
  name: string;
  bio: string;
}

const InstructorCard = ({ name, bio }: InstructorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
    >
      <h3 className="text-xl font-bold mb-4">About the Instructor</h3>
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InstructorCard;

