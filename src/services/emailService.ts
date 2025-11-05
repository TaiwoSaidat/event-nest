export const emailService = {
  sendRegistrationEmail: async (
    email: string,
    event: Event,
    tickets: number
  ): Promise<boolean> => {
    const message = `You have registered for '${event.title}' event at '${event.location}' by '${event.organizer}' on ${event.date}, ${event.time} for ${tickets} person${tickets > 1 ? 's' : ''}. This mail will serve as your entry ticket.`;
    
    console.log(`Sending email to: ${email}`);
    console.log(`Message: ${message}`);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  },
};
