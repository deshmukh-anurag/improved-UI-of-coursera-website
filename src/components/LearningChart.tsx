const LearningChart = () => {
    // Mock data for the last 7 days
    const chartData = [
        { day: 'Mon', hours: 2.5 },
        { day: 'Tue', hours: 1.5 },
        { day: 'Wed', hours: 3.0 },
        { day: 'Thu', hours: 2.0 },
        { day: 'Fri', hours: 4.0 },
        { day: 'Sat', hours: 1.0 },
        { day: 'Sun', hours: 2.5 }
    ];

    const maxHours = Math.max(...chartData.map(d => d.hours));

    return (
        <div className="space-y-4">
            <div className="flex items-end space-x-4 h-40">
                {chartData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-t relative overflow-hidden">
                            <div
                                className="bg-gradient-to-t from-primary-light to-primary-dark rounded-t transition-all duration-500 ease-out"
                                style={{
                                    height: `${(data.hours / maxHours) * 120}px`,
                                    minHeight: data.hours > 0 ? '8px' : '0px'
                                }}
                            />
                            <div className="absolute inset-x-0 top-2 text-center">
                                <span className="text-xs font-semibold text-white">
                                    {data.hours}h
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {data.day}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p>Daily learning hours this week</p>
            </div>
        </div>
    );
};

export default LearningChart;
