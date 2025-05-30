"use client";
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mt-20">
      {/* Header */}
      <div className="bg-blue-700 dark:bg-blue-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 dark:text-blue-200 max-w-2xl">
            Have questions or need assistance? We're here to help.
          </p>
        </div>
      </div>

      <div className="py-12 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Email</h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-300">support@jobhub.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Phone</h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Office</h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                        123 Abdealmoumen Casablanca, Morocco
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-black dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-black dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-black dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-black dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-black dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-6 py-3 bg-blue-700 dark:bg-blue-600 text-white rounded-md hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
