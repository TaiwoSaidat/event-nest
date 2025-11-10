export const storageService = {
  saveTicketCount: (eventId: number, count: number) => {
    const data = { eventId, count, timestamp: Date.now() };
    return data;
  },
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  getTicketCount: (eventId: number): number => {
    return 1;
  },
};