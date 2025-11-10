import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 bg-black">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-900/30 rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="max-w-md">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">Operate at the speed of trust.</h2>
          <p className="text-gray-400 mb-8">
            Request an invitation to myNtropy : the System of Clarity.
          </p>
          <button className="px-8 py-3 border border-orange-500 bg-orange-500/10 text-orange-400 rounded-full hover:bg-orange-500 hover:text-black transition-colors duration-300 w-full sm:w-auto">
            REQUEST ACCESS
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-[#111111]/50 border border-gray-800 rounded-lg p-8 backdrop-blur-sm">
          <label htmlFor="intent" className="text-sm text-gray-400 block mb-2">
            Type your intent:
          </label>
          <textarea
            id="intent"
            rows={3}
            className="w-full bg-black border border-gray-700 rounded-md p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            placeholder="im looking for a co-investor in clean energy"
          ></textarea>
          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <p>YPO Member - Dubai</p>
            <p>Request for fat-grain-window</p>
            <p>Family Officer Aligned thesis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
