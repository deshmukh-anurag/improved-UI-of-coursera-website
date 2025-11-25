import { useState } from 'react';

const StreakCalendar = () => {
    // Mock streak data for the last 60 days
    const generateStreakData = () => {
        const data = [];
        const today = new Date();

        for (let i = 59; i >= 0; i--) {
            const date = new Date();
            date.setDate(today.getDate() - i);

            // Simulate learning activity (80% chance of activity)
            const hasActivity = Math.random() > 0.2;
            const intensity = hasActivity ? Math.floor(Math.random() * 4) + 1 : 0;

            data.push({
                date: date.toDateString(),
                intensity, // 0-4 scale
                hours: hasActivity ? Math.floor(Math.random() * 3) + 1 : 0
            });
        }
        return data;
    };

    const [streakData] = useState(generateStreakData());

    const getIntensityColor = (intensity: number) => {
        switch (intensity) {
            case 0: return 'bg-gray-200 dark:bg-gray-700';
            case 1: return 'bg-green-200 dark:bg-green-800';
            case 2: return 'bg-green-300 dark:bg-green-700';
            case 3: return 'bg-green-400 dark:bg-green-600';
            case 4: return 'bg-green-500 dark:bg-green-500';
            default: return 'bg-gray-200 dark:bg-gray-700';
        }
    };

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Group data by weeks
    const weeks = [];
    for (let i = 0; i < streakData.length; i += 7) {
        weeks.push(streakData.slice(i, i + 7));
    }

    return (
        <div className="space-y-4">
            {/* Legend */}
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Less</span>
                <div className="flex items-center space-x-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                        <div
                            key={level}
                            className={`w-3 h-3 rounded-sm ${getIntensityColor(level)}`}
                        />
                    ))}
                </div>
                <span>More</span>
            </div>

            {/* Calendar Grid */}
            <div className="space-y-1">
                {/* Week day labels */}
                <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 dark:text-gray-400">
                    {weekDays.map((day) => (
                        <div key={day} className="text-center">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar weeks */}
                {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-cols-7 gap-1">
                        {week.map((day, dayIndex) => (
                            <div
                                key={dayIndex}
                                className={`w-4 h-4 rounded-sm ${getIntensityColor(day.intensity)} cursor-pointer transition-transform hover:scale-110`}
                                title={`${day.date}: ${day.hours} hours`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p>Learning activity over the past 60 days</p>
            </div>
        </div>
    );
};

export default StreakCalendar;
