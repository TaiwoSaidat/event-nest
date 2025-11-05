import React from "react";
import { EventFilters } from "../events/EventFilters";
import { EmptyState } from "../ui/EmptyState";
import { EventCard } from "../events/EventCard";
import { Pagination } from "../ui/Pagination";
import { Calendar } from "lucide-react";
import { useEventFilters } from "@/hooks/useEventFilters";
import { usePagination } from "@/hooks/usePagination";

interface EventListPageProps {
  events: Event[];
  onEventClick: (id: number) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  petsFilter: boolean;
  onPetsFilterChange: () => void;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const EventListPage: React.FC<EventListPageProps> = ({
  events,
  onEventClick,
  searchQuery,
  onSearchChange,
  petsFilter,
  onPetsFilterChange,
  currentPage,
  onPageChange,
}) => {
  const EVENTS_PER_PAGE = 3;
  const filteredEvents = useEventFilters(events, searchQuery, petsFilter);
  const { paginatedItems, totalPages } = usePagination(
    filteredEvents,
    EVENTS_PER_PAGE,
    currentPage
  );

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Discover Events
          </h1>
          <p className="text-xl text-gray-600">
            Find and join amazing events in your community
          </p>
        </div>

        <EventFilters
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          petsFilter={petsFilter}
          onPetsFilterChange={onPetsFilterChange}
          resultCount={filteredEvents.length}
        />

        {paginatedItems.length === 0 ? (
          <EmptyState
            icon={<Calendar size={64} />}
            title="No events found"
            description="Try adjusting your search or filters"
          />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedItems.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={onEventClick}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};


