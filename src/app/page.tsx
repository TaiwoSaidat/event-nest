'use client';
import React, { useState, useEffect } from "react";
import { useEvents } from "@/hooks/useEvents";
import { useEventById } from "@/hooks/useEventsById";
import { EventListPage } from "@/components/pages/EventListPage";
import { EventDetailPage } from "@/components/pages/EventDetailsPage";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <div className=" bg-red-800 text-3xl font-bold underline p-4 m-4 border-4 border-amber-800 ">
//         EVENT NEST
//       </div>
//     </>
//   );
// }

export default function EventApp() {
  const [view, setView] = useState<"list" | "single">("list");
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [petsFilter, setPetsFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: events, isLoading, error } = useEvents();
  const selectedEvent = useEventById(selectedEventId, events);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, petsFilter]);

  const handleEventClick = (id: number) => {
    setSelectedEventId(id);
    setView("single");
  };

  const handleBackToList = () => {
    setView("list");
    setSelectedEventId(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading events...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load events: {error}
      </div>
    );
  }

  if (view === "single" && selectedEvent) {
    return <EventDetailPage event={selectedEvent} onBack={handleBackToList} />;
  }

  return (
    <EventListPage
      events={events}
      onEventClick={handleEventClick}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      petsFilter={petsFilter}
      onPetsFilterChange={() => setPetsFilter(!petsFilter)}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}
