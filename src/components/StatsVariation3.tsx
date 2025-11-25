import { motion } from 'framer-motion';
import { BookOpen, Users, Users2, Play, TrendingUp, Sparkles } from 'lucide-react';

const StatsVariation3 = () => {
    const stats = [
        {
            value: '10k',
            label: 'Courses Available',
            icon: BookOpen,
            gradient: 'from-amber-500 via-orange-500 to-red-500',
            glow: 'shadow-amber-500/50',
            delay: 0.1
        },
        {
            value: '5k',
            label: 'Expert Instructors',
            icon: Users2,
            gradient: 'from-blue-500 via-indigo-500 to-purple-500',
            glow: 'shadow-blue-500/50',
            delay: 0.2
        },
        {
            value: '500k',
            label: 'Video Lessons',
            icon: Play,
            gradient: 'from-pink-500 via-rose-500 to-fuchsia-500',
            glow: 'shadow-pink-500/50',
            delay: 0.3
        },
        {
            value: '120M',
            label: 'Students Learning',
            icon: Users,
            gradient: 'from-green-500 via-emerald-500 to-teal-500',
            glow: 'shadow-green-500/50',
            delay: 0.4
        },
        {
            value: '3B',
            label: 'Learning Hours',
            icon: TrendingUp,
            gradient: 'from-violet-500 via-purple-500 to-indigo-500',
            glow: 'shadow-violet-500/50',
            delay: 0.5
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-4 py-2 rounded-full mb-6 border border-amber-500/30">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-semibold text-amber-400">Platform Statistics</span>
                    </div>
                    <h2 className="text-5xl font-black text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Excellence in Numbers
                    </h2>
                    <p className="text-xl text-gray-400">
                        Experience world-class learning with proven results
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.delay }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                                {/* Glow effect */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 ${stat.glow} shadow-2xl transition-all duration-300`}></div>

                                <div className="relative flex flex-col items-center space-y-6">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Stats */}
                                    <div className="text-center">
                                        <div className="flex items-baseline justify-center mb-3">
                                            <span className="text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                                                {stat.value}
                                            </span>
                                            <span className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent ml-2">
                                                +
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* Animated underline */}
                                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-500`}></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsVariation3;
