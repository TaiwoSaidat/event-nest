// 'use client';
import { useState, useEffect } from "react";
import { eventService } from "@/services/eventService";

export const useEvents = () => {
  const [data, setData] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async (): Promise<void> => {
      try {
        const events = await eventService.fetchEvents();
        setData(events);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };
    //  try {
    //     const events: Event[] = await eventService.fetchEvents();
    //     setData(events);
    //   } catch (err: unknown) { 
    //     if (err instanceof Error ) {
    //       setError(err.message);
    //     } else {
    //       setError("An unknown error occurred");
    //     }
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    fetchEvents();
  }, []);

  return { data, isLoading, error };
};
