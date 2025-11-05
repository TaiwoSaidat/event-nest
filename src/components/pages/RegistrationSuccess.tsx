import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";

const RegistrationSuccess = ({
  event,
  onBackToEvents,
}: {
  event: Event;
  onBackToEvents: () => void;
}) => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 rounded-full p-6">
            <CheckCircle size={64} className="text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Registration Successful!
        </h1>

        <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Event Details
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Event:</strong> {event.title}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Organizer:</strong> {event.organizer}
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 text-left">
          <p className="text-sm text-yellow-800">
            <strong>📧 Check your email!</strong> A confirmation email has been
            sent to your registered email address. This email will serve as your
            entry ticket.
          </p>
        </div>

        <Button variant="primary" onClick={onBackToEvents}>
          Back to All Events
        </Button>
      </div>
    </div>
  );
};
export default RegistrationSuccess;