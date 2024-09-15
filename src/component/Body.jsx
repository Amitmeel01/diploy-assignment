import React from "react";

function Body() {
  return (
    <div className="bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 space-y-8 md:space-y-0">
        {/* Left Content Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 leading-snug">
            Print on demand for your ecommerce business
          </h1>
          <h2 className="text-lg font-medium text-gray-700">
            Sign up for free and only pay for what you sell
          </h2>
          <p className="text-base text-gray-600">
            Turn your passion into profit with the world's largest print on
            demand network.
          </p>

          {/* Buttons and Shopify section */}
          <div className="mt-6">
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                Get started for free
              </button>
              <button className="border border-black px-6 py-3 rounded-md hover:bg-gray-100">
                See our products
              </button>
            </div>

            {/* Shopify and Rating */}
            <div className="flex items-center mt-6 space-x-2 ml-4">
              <img src="/image/shopify.svg" alt="Shopify" className="w-28" />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src="/image/star.svg"
                    alt="Rating stars"
                    className="w-5"
                  />
                ))}
                <span className="text-lg font-semibold">4.8/5</span>
              </div>
            </div>
            <p className="text-gray-500 m-4">based on 887 reviews</p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[45%] flex justify-center">
          <img
            src="/image/1st.jpg"
            alt="Product visuals"
            className="rounded-md shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="bg-yellow-100 px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h1 className="text-5xl font-bold">90%</h1>
          <p className="text-xl">of all orders are produced locally</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold">90%</h1>
          <p className="text-xl">of orders arrive within 5 days</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold">140+</h1>
          <p className="text-xl">print providers across 32 countries</p>
        </div>
      </div>

      {/* Why choose Gelato Section */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center mt-12">
        Why choose Gelato
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="/image/2nd.jpg"
            alt="Why choose Gelato"
            className="rounded-md shadow-md w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-6">
          {[
            {
              title: "World's largest print-on-demand network",
              description:
                "140+ print partners in 32 countries. Gelato is a truly global service.",
            },
            {
              title: "Sell globally, produce locally",
              description:
                "Your products are produced close to your customers, wherever they are.",
            },
            {
              title: "100% free editing tools",
              description:
                "Create your custom products using our suite of free tools.",
            },
            {
              title: "60+ logistics partners",
              description:
                "Our global network ensures fast delivery of your products.",
            },
            {
              title: "High-quality products",
              description:
                "We partner with leading brands to ensure the best quality products.",
            },
            {
              title: "Endless creativity with Shutterstock Images",
              description:
                "Access millions of images and graphics to create unique products.",
            },
            {
              title: "1-click integration with leading platforms",
              description:
                "Connect your store to Gelato with integrations like Shopify, Etsy, etc.",
            },
          ].map((item, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{`▻ ${item.title}`}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional sections */}
      {/* For print on demand sellers */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12">
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg">For print on demand sellers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Accelerate business growth with innovative design tools
          </h1>
          <p className="text-lg text-gray-600">
            See how our solutions help you reach new customers and maximize
            profits.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            Get started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/image/4th.gif" alt="For print on demand sellers" />
        </div>
      </div>

      {/* For print producers */}
      <div className="flex flex-col md:flex-row-reverse justify-around items-center px-6 py-12 gap-8">
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg">For print producers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            GelatoConnect
          </h1>
          <p className="text-lg text-gray-600">
            Elevate efficiency, cut costs, and automate with our all-in-one
            solution.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            Learn more
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/image/5th.gif" alt="GelatoConnect" />
        </div>
      </div>

      {/* Printing United Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet GelatoConnect at Printing United
          </h1>
          <p className="text-lg text-gray-600">
            Meet us from September 10-12 in Las Vegas. Book your meeting to
            discover how we're transforming businesses.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            Book a meeting
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/image/6th.jpg" alt="Printing United" />
        </div>
      </div>
    </div>
  );
}

export default Body;
