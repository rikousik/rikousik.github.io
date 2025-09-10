"use client";

import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "lightify6@gmail.com", // Your email
        },
        publicKey,
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mb-16">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          heading="Let's Work Together"
          description="Ready to bring your ideas to life? I'm always excited to work on interesting projects and collaborate with amazing people. Let's create something extraordinary together."
          tagIcon="solar:chat-line-bold"
          tagText="Contact"
          centered={true}
        />

        {/* Contact Form */}
        <div className="mb-12">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Icon
                      icon="solar:loading-outline"
                      width={20}
                      height={20}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Icon icon="solar:letter-outline" width={20} height={20} />
                    Send Message
                    <div className="ml-2">→</div>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="relative mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <Icon
                      icon="solar:check-circle-bold"
                      width={20}
                      height={20}
                    />
                    <span className="font-medium">
                      Message sent successfully!
                    </span>
                  </div>
                  <p className="text-green-600 text-left dark:text-green-500 text-sm mt-1">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                  {/* add a button to close the message */}
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    type="button"
                    className="absolute top-1 right-1  text-red-500 rounded-md"
                  >
                    <Icon
                      icon="solar:close-circle-bold"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                    <Icon
                      icon="solar:close-circle-bold"
                      width={20}
                      height={20}
                    />
                    <span className="font-medium">Failed to send message</span>
                  </div>
                  <p className="text-red-600 text-left dark:text-red-500 text-sm mt-1">
                    Please try again or contact me directly at
                    rikousik@gmail.com
                  </p>
                  {/* add a button to close the message */}
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    type="button"
                    className="absolute top-1 right-1  text-red-500 rounded-md"
                  >
                    <Icon
                      icon="solar:close-circle-bold"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Alternative Contact Methods */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Or reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <Link
                href="mailto:rikousik@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Icon
                  icon="solar:mailbox-bold-duotone"
                  width={18}
                  height={18}
                />
                Send Email
              </Link>
            </div>

            <div>
              <Link
                href="/CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Icon icon="solar:download-outline" width={18} height={18} />
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
