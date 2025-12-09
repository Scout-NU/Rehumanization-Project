import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={`rounded-lg w-full ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-white text-body-small font-medium mb-3"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full px-4 py-3 bg-bg-secondary border border-stroke-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-white text-body-small font-medium mb-3"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Smith"
              className="w-full px-4 py-3 bg-bg-secondary border border-stroke-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-white text-body-small font-medium mb-3"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@domain.com"
            className="w-full px-4 py-3 bg-bg-secondary border border-stroke-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-white text-body-small font-medium mb-3"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            className="w-full px-4 py-3 bg-bg-secondary border border-stroke-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-white text-body-small font-medium mb-3"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="I'm reaching out because"
            rows={4}
            className="w-full px-4 py-3 bg-bg-secondary border border-stroke-primary rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent resize-vertical"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <PrimaryButton type="submit" className="w-full text-base">
            Submit
          </PrimaryButton>
        </div>
      </form>

      {/* Response Time Note */}
      <p className="text-text-secondary text-base text-start mt-6 italic">
        We typically respond to messages within 24 hours
      </p>
    </div>
  );
}
