/* eslint-disable @typescript-eslint/no-unused-vars */
interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
  petsAllowed: boolean;
}

interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  numberOfTickets: number;
  specialRequirements: string;
  dietaryPreferences: string;
  agreeToTerms: boolean;
  subscribeToUpdates: boolean;
}