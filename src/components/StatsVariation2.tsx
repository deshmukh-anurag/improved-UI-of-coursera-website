import { motion } from 'framer-motion';
import { BookOpen, Users, Users2, Play, TrendingUp } from 'lucide-react';

const StatsVariation2 = () => {
    const stats = [
        {
            value: '10k',
            label: 'Courses Available',
            icon: BookOpen,
            color: 'from-yellow-400 to-amber-500',
            bg: 'bg-yellow-50 dark:bg-yellow-900/10',
            delay: 0.1
        },
        {
            value: '5k',
            label: 'Expert Instructors',
            icon: Users2,
            color: 'from-blue-400 to-cyan-500',
            bg: 'bg-blue-50 dark:bg-blue-900/10',
            delay: 0.2
        },
        {
            value: '500k',
            label: 'Video Lessons',
            icon: Play,
            color: 'from-pink-400 to-fuchsia-500',
            bg: 'bg-pink-50 dark:bg-pink-900/10',
            delay: 0.3
        },
        {
            value: '120M',
            label: 'Students Learning',
            icon: Users,
            color: 'from-green-400 to-teal-500',
            bg: 'bg-green-50 dark:bg-green-900/10',
            delay: 0.4
        },
        {
            value: '3B',
            label: 'Learning Hours',
            icon: TrendingUp,
            color: 'from-purple-400 to-indigo-500',
            bg: 'bg-purple-50 dark:bg-purple-900/10',
            delay: 0.5
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Empowering Learners Worldwide
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Our platform is trusted by millions globally
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.delay }}
                            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                            className={`${stat.bg} rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden`}
                        >
                            {/* Decorative blob */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl`}></div>

                            <div className="relative flex flex-col items-center space-y-6">
                                {/* Icon with playful design */}
                                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform rotate-6 shadow-lg`}>
                                    <stat.icon className="w-10 h-10 text-white transform -rotate-6" />
                                </div>

                                {/* Stats */}
                                <div className="text-center">
                                    <div className="flex items-baseline justify-center mb-2">
                                        <span className="text-5xl font-black text-gray-900 dark:text-white">
                                            {stat.value}
                                        </span>
                                        <span className="text-4xl font-black text-green-500 ml-2">+</span>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom decorative element */}
                            <div className={`absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-20 rounded-full`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsVariation2;
