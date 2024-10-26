import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center py-4 text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to <span className="font-semibold">GadgetHub</span>, your one-stop shop for the latest and greatest gadgets.
          We are passionate about bringing you high-quality products that make life easier, more enjoyable, and exciting.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          At GadgetHub, we aim to provide our customers with the best in technology and innovation. From smartphones to laptops, headphones to gaming consoles, we source products from trusted brands worldwide to ensure you get only the finest gadgets available.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6">
          <li>Wide range of products to meet all your gadget needs.</li>
          <li>Affordable prices with frequent discounts and offers.</li>
          <li>Dedicated customer support to assist you anytime.</li>
          <li>Fast and reliable shipping to ensure timely delivery.</li>
          <li>Secure payment options for a safe shopping experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-700">
          Founded in [Year], GadgetHub began as a small startup with a vision to revolutionize the online shopping experience for gadget enthusiasts. Over the years, we have grown into a trusted brand, helping countless customers find the gadgets they love. Our commitment to quality and customer satisfaction drives us to keep expanding and innovating.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
