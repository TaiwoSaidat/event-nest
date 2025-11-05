import React, { useState } from "react";
import {
  ChevronLeft,
  CheckCircle,
  Mail,
  Phone,
  Users,
  User,
} from "lucide-react";
import { Button } from "../ui/Button";
import FormInput from "../forms/FormInput";
import { storageService } from "@/services/storageService";
import FormSelect from "../forms/FormSelect";
import FormTextarea from "../forms/FormTextarea";
import FormCheckbox from "../forms/FormCheckbox";
import { emailService } from "@/services/emailService";

export const RegistrationForm = ({
  event,
  onBack,
  onSuccess,
}: {
  event: Event;
  onBack: () => void;
  onSuccess: () => void;
}) => {
  const [formData, setFormData] = useState<RegistrationForm>({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    numberOfTickets: 1,
    specialRequirements: "",
    dietaryPreferences: "",
    agreeToTerms: false,
    subscribeToUpdates: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      storageService.saveTicketCount(event.id, formData.numberOfTickets);

      await emailService.sendRegistrationEmail(
        formData.email,
        event,
        formData.numberOfTickets
      );

      onSuccess();
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof RegistrationForm, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-3xl mx-auto p-6">
        <Button
          variant="secondary"
          onClick={onBack}
          icon={<ChevronLeft size={20} />}
        >
          Back to Event Details
        </Button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-6">
          <div className="bg-blue-500 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Event Registration</h1>
            <p className="text-blue-100">{event.title}</p>
            <p className="text-sm text-blue-100 mt-1">
              {event.date} at {event.time} • {event.location}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Basic Information
              </h2>

              <FormInput
                label="Full Name"
                value={formData.fullName}
                onChange={(v) => updateField("fullName", v)}
                required
                placeholder="John Doe"
                icon={<User size={18} />}
              />

              <FormInput
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(v) => updateField("email", v)}
                required
                placeholder="john.doe@example.com"
                icon={<Mail size={18} />}
              />

              <FormInput
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(v) => updateField("phone", v)}
                required
                placeholder="+1 (555) 123-4567"
                icon={<Phone size={18} />}
              />

              <FormSelect
                label="Gender"
                value={formData.gender}
                onChange={(v) => updateField("gender", v)}
                required
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                  { value: "prefer-not-to-say", label: "Prefer not to say" },
                ]}
              />

              <FormInput
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(v) => updateField("dateOfBirth", v)}
                required
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Event Details
              </h2>

              <FormInput
                label="Number of Tickets / Attendees"
                type="number"
                value={formData.numberOfTickets}
                onChange={(v) =>
                  updateField("numberOfTickets", parseInt(v) || 1)
                }
                required
                min={1}
                max={10}
                icon={<Users size={18} />}
              />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Additional Information
              </h2>

              <FormTextarea
                label="Special Requirements / Accessibility Needs"
                value={formData.specialRequirements}
                onChange={(v) => updateField("specialRequirements", v)}
                placeholder="Please let us know if you have any special requirements..."
              />

              <FormInput
                label="Dietary Preferences"
                value={formData.dietaryPreferences}
                onChange={(v) => updateField("dietaryPreferences", v)}
                placeholder="Vegetarian, Vegan, Gluten-free, etc."
              />
            </div>

            <div className="mb-8 border-t pt-6">
              <FormCheckbox
                label="I agree to the Terms & Conditions"
                checked={formData.agreeToTerms}
                onChange={(v) => updateField("agreeToTerms", v)}
                required
              />

              <FormCheckbox
                label="Subscribe to updates and newsletter"
                checked={formData.subscribeToUpdates}
                onChange={(v) => updateField("subscribeToUpdates", v)}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              icon={isSubmitting ? null : <CheckCircle size={20} />}
            >
              {isSubmitting ? "Processing..." : "Complete Registration"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
