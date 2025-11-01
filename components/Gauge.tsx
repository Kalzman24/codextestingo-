import React from 'react';

const resultLevels: { [key: number]: { color: string } } = {
  0: { color: "rgb(239 68 68)" },   // red-500
  30: { color: "rgb(234 179 8)" },   // yellow-500
  60: { color: "rgb(59 130 246)" },  // blue-500
  80: { color: "rgb(34 197 94)" },  // green-500
};

type GaugeProps = {
    value: number;
};

export const Gauge: React.FC<GaugeProps> = ({ value }) => {
    const size = 180;
    const strokeWidth = 14;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    const colorKeys = Object.keys(resultLevels).map(Number).sort((a,b) => a - b);
    let color = resultLevels[colorKeys[0]].color;
    for (const key of colorKeys) {
        if (value >= key) {
            color = resultLevels[key].color;
        }
    }
    
    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
                <circle
                    stroke="#374151" // gray-700
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    stroke={color}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold" style={{color}}>
                    {Math.round(value)}
                </span>
            </div>
        </div>
    );
};