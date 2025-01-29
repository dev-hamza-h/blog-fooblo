'use client';

const ContactPage = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-5xl font-extrabold text-red-500 mb-6 mt-12">Contact Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-screen-2xl mx-auto">
          Have any questions, suggestions, or feedback? We&apos;d love to hear from you! 
          Get in touch with us through the form below.
        </p>
      </div>
      
      <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
