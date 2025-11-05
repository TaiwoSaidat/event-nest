export const storageService = {
  saveTicketCount: (eventId: number, count: number) => {
    const data = { eventId, count, timestamp: Date.now() };
    return data;
  },

  getTicketCount: (eventId: number): number => {
    return 1;
  },
};