import { useMemo } from 'react';
// import { Event } from '../types/event';

export const useEventFilters = (
  events: Event[],
  searchQuery: string,
  petsFilter: boolean
) => {
  return useMemo(() => {
    if (!events) return [];

    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPetsFilter = !petsFilter || event.petsAllowed;

      return matchesSearch && matchesPetsFilter;
    });
  }, [events, searchQuery, petsFilter]);
};

