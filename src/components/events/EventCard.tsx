import React from "react";
import { Calendar, MapPin } from "lucide-react";
// import CategoryBadge from '@/components/ui/CategoryBadge' ;
import CategoryBadge from "../ui/CategoryBadge";

interface EventCardProps {
  event: Event;
  onClick: (id: number) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div
      onClick={() => onClick(event.id)}
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="h-32 bg-blue-500 flex items-center justify-center">
        <Calendar size={48} className="text-white opacity-80" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <CategoryBadge category={event.category} />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={16} />
            <span>
              {event.date} at {event.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
