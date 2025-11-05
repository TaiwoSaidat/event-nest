import React from "react";
import { ChevronLeft, Calendar, MapPin, Clock, Heart } from "lucide-react";
import CategoryBadge from "../ui/CategoryBadge";
import { InfoCard } from "../ui/InfoCard";
import { Button } from "../ui/Button";

interface EventDetailPageProps {
  event: Event;
  onBack: () => void;
  onRegister: () => void;
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({
  event,
  onBack,
  onRegister,
}) => {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto p-6">
        <Button
          variant="secondary"
          onClick={onBack}
          icon={<ChevronLeft size={20} />}
        >
          Back to Events
        </Button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-6">
          <div className="h-48 bg-blue-500 flex items-center justify-center">
            <Calendar size={64} className="text-white opacity-80" />
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <CategoryBadge category={event.category} />
                <h1 className="text-4xl font-bold text-gray-900 mb-2 mt-3">
                  {event.title}
                </h1>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {event.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <InfoCard
                icon={<MapPin className="text-blue-500" size={24} />}
                label="Location"
                value={event.location}
              />
              <InfoCard
                icon={<Calendar className="text-blue-500" size={24} />}
                label="Date"
                value={event.date}
              />
              <InfoCard
                icon={<Clock className="text-orange-500" size={24} />}
                label="Time"
                value={event.time}
              />
              <InfoCard
                icon={<Heart className="text-red-500" size={24} />}
                label="Organizer"
                value={event.organizer}
              />
            </div>

            <Button variant="primary" onClick={onRegister}>
              Register for Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
