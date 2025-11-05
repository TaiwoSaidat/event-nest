export const eventService = {
  fetchEvents: async (): Promise<Event[]> => {
    const res = await fetch(
      "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events"
    );
    if (!res.ok) throw new Error("Failed to fetch events");
    return res.json();
  },
};
