"use client";
import React, { useState } from "react";
import JsonLd from "@/components/SEO/JsonLd";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="w-full bg-custom-white dark:bg-custom-black py-20 px-4 flex flex-col items-center" role="region" aria-labelledby="contact-form-heading">
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
          }
        }}
      />
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h4 className="font-poppins text-lg text-black dark:text-white mb-2">Swiftscale Consult</h4>
          <h2 id="contact-form-heading" className="font-monument-ultrabold text-4xl md:text-5xl text-black dark:text-white mb-6 leading-tight">
            Keep In Touch
          </h2>
          <p className="font-poppins text-lg text-black dark:text-white mb-8">
            Have questions, ideas, or a challenge we can solve? Let’s talk. Our team is ready to respond quickly and get you the answers you need — so you can move forward without delay.
          </p>
        </div>
        {/* Right Side */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-transparent border border-white rounded-lg" aria-describedby="contact-form-help">
            <p id="contact-form-help" className="sr-only">All fields except message are required.</p>
            <div className="relative border-b border-white">
              <label htmlFor="name" className="sr-only">Your name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
                aria-invalid={formData.name.trim() === ''}
              />
              <span className="absolute right-2 top-3 text-black dark:text-white text-lg">👤</span>
            </div>
            <div className="relative border-b border-white">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
                aria-invalid={formData.email.trim() === ''}
              />
              <span className="absolute right-2 top-3 text-black dark:text-white text-lg">📧</span>
            </div>
            <div className="relative border-b border-white">
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
                aria-invalid={formData.subject.trim() === ''}
              />
              <span className="absolute right-2 top-3 text-black dark:text-white text-lg">📄</span>
            </div>
            <div className="relative border-b border-white">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message (optional)"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0 resize-none"
                rows={4}
              />
              <span className="absolute right-2 top-3 text-black dark:text-white text-lg">📝</span>
            </div>
            <button
              type="submit"
              className="bg-[#6A01E1] text-white font-poppins px-10 py-3 rounded-full text-lg hover:bg-purple-700 transition-colors duration-300"
              aria-label="Submit contact form"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}