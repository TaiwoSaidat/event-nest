// 'use client';
import { useState, useEffect } from "react";
import { eventService } from "@/services/eventService";
// import eventService from '../services/eventService';
// import { Event } from '../types/event';

export const useEvents = () => {
  const [data, setData] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await eventService.fetchEvents();
        setData(events);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return { data, isLoading, error };
};
