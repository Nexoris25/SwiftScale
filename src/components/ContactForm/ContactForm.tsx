"use client";
import React, { useState } from "react";
import JsonLd from "@/components/SEO/JsonLd";
import { useRouter } from "next/navigation";

// Better Icons (Lucide)
import { User2, Mail, FileText, MessageSquare } from "lucide-react";

export default function ContactFormSection() {
  const navigate = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formEndpoint = "https://formsubmit.co/ajax/info@swiftscale.com.ng";

  const [status, setStatus] = React.useState({
    loading: false,
    error: false,
    success: false,
  });

  const contactInfo = {
    email: "info@swiftscale.com.ng",
    phone: "+2347037428518",
    brandName: "SwiftScale",
  };

  const autoResponseMessage = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #7c3c8e;">Thank you for your message!</h2>
    <p>
      Thank you for reaching out to <strong>${contactInfo.brandName}</strong>!
      We will get back to you within the next <strong>48 hours</strong> from email:
      <a href="mailto:${contactInfo.email}" style="color: #7c3c8e;">${contactInfo.email}</a>.
    </p>
    <p>
      If no response is received, please send another message or call/text:
      <a href="tel:${contactInfo.phone}" style="color: #7c3c8e;">${contactInfo.phone}</a>.
    </p>
  </div>
  `;

  const handleSubmit = React.useCallback(
    async (e: any) => {
      e.preventDefault();
      setStatus({ loading: true, error: false, success: false });

      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            _captcha: false,
            _autoresponse: autoResponseMessage,
          }),
        });

        if (response.ok) {
          setStatus({ loading: false, error: false, success: true });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setStatus({ loading: false, error: true, success: false });
        }
      } catch {
        setStatus({ loading: false, error: true, success: false });
      }
    },
    [autoResponseMessage, formData]
  );

  return (
    <section
      className="w-full bg-custom-white dark:bg-custom-black max-lg:py-10 py-20 px-4 flex flex-col items-center"
      role="region"
      aria-labelledby="contact-form-heading"
    >
      <JsonLd
        id="ld-contact-point"
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SwiftScale",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            availableLanguage: ["English"],
          },
        }}
      />

      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <h4 className="font-poppins text-base md:text-lg text-black max-lg:text-center dark:text-white mb-2">
            Swiftscale Consult
          </h4>

          <h2
            id="contact-form-heading"
            className="font-monument-ultrabold max-lg:text-center text-3xl md:text-5xl text-black dark:text-white mb-6 leading-tight"
          >
            Keep In Touch
          </h2>

          <p className="font-poppins text-base md:text-lg text-black max-lg:text-center dark:text-white mb-8">
            Have questions, ideas, or a challenge we can solve? Let’s talk. Our
            team is ready to respond quickly and help you move forward.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="max-lg:w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 max-lg:px-2 bg-transparent rounded-lg"
            aria-describedby="contact-form-help"
          >
            <p id="contact-form-help" className="sr-only">
              All fields except message are required.
            </p>

            {/* NAME */}
            <div className="relative border-b border-white w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
              />
              <User2 className="absolute right-2 top-3 h-5 w-5 text-black dark:text-white" />
            </div>

            {/* EMAIL */}
            <div className="relative border-b border-white w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
              />
              <Mail className="absolute right-2 top-3 h-5 w-5 text-black dark:text-white" />
            </div>

            {/* SUBJECT */}
            <div className="relative border-b border-white w-full">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
              />
              <FileText className="absolute right-2 top-3 h-5 w-5 text-black dark:text-white" />
            </div>

            {/* MESSAGE */}
            <div className="relative border-b border-white w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message (optional)"
                rows={4}
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0 resize-none"
              />
              <MessageSquare className="absolute right-2 top-3 h-5 w-5 text-black dark:text-white" />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#6A01E1] text-white font-poppins cursor-pointer px-10 py-3 rounded-full text-lg hover:bg-purple-700 transition-colors duration-300"
            >
              {status.loading ? "Sending..." : "Get in Touch"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
