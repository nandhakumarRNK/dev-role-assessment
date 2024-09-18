import React from "react";

function PricingComponent() {
  return (
    <section className="py-20">
      <div className="text-center text-gray-300">
        <p className="uppercase tracking-wider mb-2">Clear & Simple Pricing</p>
        <h1 className="text-4xl font-bold text-white">
          Simple pricing to level up your brand.
        </h1>
        <p className="mt-4">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly
          fee. Cancel anytime.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold text-white mb-2">Standard</h2>
          <p className="text-gray-400 mb-4">
            Great for companies who need ongoing design support.
          </p>
          <div className="bg-green-500 text-white inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Most Popular
          </div>
          <p className="text-4xl font-bold text-white mb-6">$2,995/m</p>
          <p className="text-gray-400 mb-4">Pause or cancel anytime</p>
          <ul className="space-y-2 text-gray-300">
            <li>1 active task at a time</li>
            <li>Unlimited revisions</li>
            <li>Basic SEO</li>
            <li>Daily comms through Slack</li>
            <li>Work with Expert</li>
            <li>2-3 days turn around time</li>
            <li>Top tier design</li>
          </ul>
          <div className="mt-6">
            <button className="bg-green-600 text-white w-full py-2 rounded-md mb-2">
              Book a Call
            </button>
            <button className="border border-green-600 text-green-600 w-full py-2 rounded-md">
              Click to Buy
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold text-white mb-2">Growth</h2>
          <p className="text-gray-400 mb-4">
            Best value for companies with higher demand.
          </p>
          <div className="bg-blue-500 text-white inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Best Value
          </div>
          <p className="text-4xl font-bold text-white mb-6">$4,795/m</p>
          <p className="text-gray-400 mb-4">Pause or cancel anytime</p>
          <ul className="space-y-2 text-gray-300">
            <li>2x active task at a time</li>
            <li>Unlimited revisions</li>
            <li>Dedicated SEO Analyst</li>
            <li>Daily comms through Slack</li>
            <li>Work with Expert</li>
            <li>2-3 days turn around time</li>
            <li>Top tier Content Writer</li>
          </ul>
          <div className="mt-6">
            <button className="bg-green-600 text-white w-full py-2 rounded-md mb-2">
              Book a Call
            </button>
            <button className="border border-green-600 text-green-600 w-full py-2 rounded-md">
              Click to Buy
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold text-white mb-2">Basic - Weekly</h2>
          <p className="text-gray-400 mb-4">
            Perfect for businesses that need quick fixes.
          </p>
          <p className="text-4xl font-bold text-white mb-6">$890/m</p>
          <p className="text-gray-400 mb-4">Paid per weekly</p>
          <ul className="space-y-2 text-gray-300">
            <li>Fixed Scope of work</li>
            <li>2 rounds of revisions</li>
            <li>Advance SEO</li>
            <li>Daily comms through Slack</li>
            <li>2 designer and 1 SEO person</li>
            <li>Top Content Writer & design</li>
          </ul>
          <div className="mt-6">
            <button className="bg-green-600 text-white w-full py-2 rounded-md mb-2">
              Book a Call
            </button>
            <button className="border border-green-600 text-green-600 w-full py-2 rounded-md">
              Click to Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingComponent;
