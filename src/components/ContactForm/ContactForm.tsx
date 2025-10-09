"use client";
import React, { useState } from "react";

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
    <section className="w-full bg-custom-white dark:bg-custom-black py-20 px-4 flex flex-col items-center">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h4 className="font-poppins text-lg text-black dark:text-white mb-2">Swiftscale Consult</h4>
          <h2 className="font-monument-ultrabold text-4xl md:text-5xl text-black dark:text-white mb-6 leading-tight">
            Keep In Touch
          </h2>
          <p className="font-poppins text-lg text-black dark:text-white mb-8">
            Have questions, ideas, or a challenge we can solve? Let’s talk. Our team is ready to respond quickly and get you the answers you need — so you can move forward without delay.
          </p>
        </div>
        {/* Right Side */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-transparent border border-white rounded-lg">
            <div className="relative border-b border-white">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
              />
              <span className="absolute right-2 top-3 text-black dark:text-white text-lg">👤</span>
            </div>
            <div className="relative border-b border-white">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
              />
              <span className="absolute right-2 top-3 text-black dark:text-white text-lg">📧</span>
            </div>
            <div className="relative border-b border-white">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full py-3 px-2 bg-transparent text-black dark:text-white outline-none placeholder-black dark:placeholder-white border-t-0 border-l-0 border-r-0"
                required
              />
              <span className="absolute right-2 top-3 text-black dark:text-white text-lg">📄</span>
            </div>
            <div className="relative border-b border-white">
              <textarea
                name="message"
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
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}