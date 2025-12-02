import React from 'react';
import { TimelineItem } from '../types';

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, title }) => {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-bold text-gray-800 mb-6 capitalize">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
            <span className="w-24 shrink-0 text-sm font-medium text-gray-500 font-mono">
              {item.date}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800">{item.title}</span>
              {item.description && (
                <span className="text-xs text-gray-500 mt-1">{item.description}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;