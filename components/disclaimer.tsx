import React from 'react';

const disclaimer = () => {
  return (
    <>
      <section className="relative">
        <div
          className="py-10 px-10 text-center sm:p-20 sm:px-60"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          <p className="mb-6 text-2xl font-bold sm:text-4xl sm:tracking-wide text-sky-600">
            Disclaimer
          </p>
          <p>
            This website does not contain financial advice. All content provided
            on this site is for informational purposes only and should not be
            considered as professional financial, investment, or other advice.
            We do not recommend any financial products or strategies and do not
            take into account your individual circumstances. Always consult with
            a licensed financial advisor before making any investment decisions.
          </p>
        </div>
      </section>
    </>
  );
};

export default disclaimer;
