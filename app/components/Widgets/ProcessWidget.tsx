import React from "react";

const ProcessWidget = () => {
  return (
    <div className="mt-16 px-4 md:px-32">
      <h2 className="text-center text-3xl font-extrabold text-main">
      Our Hassle-Free Plumbing Process – 4 Easy Steps
      </h2>
      <p className="mt-4 text-center text-lg">
      Getting quality plumbing service has never been easier! Here’s how it works:
      </p>
      <section className="relative lg:mx-32 flex flex-col items-center justify-center gap-8  p-8">
        {/* Vertical Progress Bar */}
        <div className="absolute left-1/2  h-[90%] w-1 -translate-x-1/2 transform bg-gray-300 md:block"></div>

        {/* Step 1 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg ">
          <div className="mb-4 text-xl font-bold"> Contact Us</div>
          <p className="">
          Give us a call or fill out our online form to schedule an appointment. Our friendly team will listen to your concerns and provide expert guidance on the next steps.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold">
             Get a Transparent Estimate
          </div>
          <p className="">
          We assess your plumbing issue and provide a detailed, upfront quote—no hidden fees, no surprises! You’ll know exactly what to expect before we start the work.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold">
          Expert Service & Repair
          </div>
          <p className="">
          Our certified plumbers arrive on time, equipped with state-of-the-art tools to fix the issue efficiently. Whether it’s a repair, installation, or maintenance, we get the job done right the first time.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold"> Enjoy Long-Lasting Results</div>
          <p className="">
          We ensure your plumbing system is fully functional and optimized, leaving your space clean and mess-free. Your satisfaction is our priority, and we stand by our work with a quality guarantee.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProcessWidget;
