import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for fresh dairy products, bulk orders, or any
              questions about our cow shala and organic products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Cow Shala Address
                    </h3>
                    <p className="text-gray-600">
                      Village Dholra,
                      <br />
                      Dist. Rajkot, Gujrat 241001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Phone Number
                    </h3>
                    <p className="text-gray-600">
                      +91 9265571740
                      <br />
                      <span className="text-sm text-gray-500">
                        Available 6:00 AM - 8:00 PM
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Email Address
                    </h3>
                    <p className="text-gray-600">
                      info@mitray.com
                      <br />
                      orders@mitray.com
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Operating Hours
                    </h3>
                    <div className="text-gray-600">
                      <p>Monday - Sunday: 6:00 AM - 8:00 PM</p>
                      <p>Fresh milk available: 6:00 AM & 6:00 PM</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="general-question">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Visit Our Cow Shala
            </h2>
            <p className="text-xl text-gray-600">
              Come and see our healthy cows and traditional dairy practices in
              person.
            </p>
          </div>

          {/* Map placeholder */}
          {/* <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Interactive map will be available here
                <br />
                Village Khatauli, Tehsil Bhawan, Dist. Hardoi, UP 241001
              </p>
            </div>
          </div> */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14776.929594247476!2d70.76386761982455!3d22.19327271177434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39583524dd776e23%3A0x6d4df2ae9391c3cc!2sDholra%2C%20Gujarat%20360024!5e0!3m2!1sen!2sin!4v1752732718619!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16  bg-gradient-to-r from-orange-50 to-orange-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              For urgent orders or immediate queries, call us directly. We&apos;re
              here to help you with all your dairy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="/products"
                className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-gray-200 hover:text-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Shop Products</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
