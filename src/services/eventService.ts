export const eventService = {
  fetchEvents: async (): Promise<Event[]> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}events/`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch events");
    return res.json();
  },
};
