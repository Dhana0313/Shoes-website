import React from "react";

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to a backend server
    console.log('Contact form submitted!');
    // You could add a success message or clear the form here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <h2 className="text-4xl font-bold text-indigo-800 text-center mb-10">Get in Touch</h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Information Section */}
        <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
          <p className="text-gray-700 mb-4">Have questions or need assistance? Reach out to us!</p>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a4.001 4.001 0 115.657-5.657l1.414 1.414a1 1 0 001.414 0l1.414-1.414a4.001 4.001 0 015.657 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              123 Shoe Lane, Sneakerville, CA 90210
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (123) 456-7890
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18" />
              </svg>
              support@shoemart.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                placeholder="Regarding your order, partnership, etc."
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage