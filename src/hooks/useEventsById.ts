import { useMemo } from 'react';

export const useEventById = (id: number | null, events: Event[]) => {
  return useMemo(() => events.find((e) => e.id === id) || null, [id, events]);
};
