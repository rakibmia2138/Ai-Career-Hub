import React from "react";

const Steps = () => {
  return (
    <div className="max-w-11/12 mx-auto my-5">
      <div className="text-center py-20 px-4 space-y-4">
        <h2 className="text-3xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-small">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="card bg-base-100 w-96 shadow-sm relative">
          <button className="btn btn-circle btn-primary absolute top-2 right-6">01</button>
          <figure className="px-10 pt-15">
            <img
              src="https://i.ibb.co.com/VWj4gSxB/user.png"
              alt="User"
              className="rounded-full border-2 p-4 bg-blue-200"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Create Account</h2>
            <p>
              Sign up for free in seconds. No credit card <br></br> required to
              get started.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm relative">
          <button className="btn btn-circle btn-primary absolute top-2 right-6">02</button>
          <figure className="px-10 pt-15">
            <img
              src="https://i.ibb.co.com/0yYnqWsw/package.png"
              alt="Package"
              className="rounded-full border-2 p-4 bg-blue-200"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Choose Products</h2>
            <p>
              Browse our catalog and select the tools <br></br> that fit your
              needs.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm relative">
          <button className="btn btn-circle btn-primary absolute top-2 right-6">03</button>
          <figure className="px-10 pt-15">
            <img
              src="https://i.ibb.co.com/NnHCZD31/rocket.png"
              alt="Rocket"
              className="rounded-full border-2 p-4 bg-blue-200"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Start Creating</h2>
            <p>
              Download and start using your premium <br></br>tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
