import React from "react";

const CTA = () => {
  return (
    <div className="bg-blue-800 text-white py-8">
      <div className="text-center p-8 space-y-4">
        <h2 className="text-3xl font-bold">Ready to Transform Your Workflow?</h2>
        <p>
          Join thousands of professionals who are already using Digitools to
          work smarter.<br></br>Start your free trial today.
        </p>
        {/* name of each tab group should be unique */}
        <div className="gap-6 flex justify-center">
          <button className="btn bg-white text-blue-800 rounded-full">Explore Products</button>
          <button className="btn btn-primary rounded-full ">View Pricing</button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default CTA;
