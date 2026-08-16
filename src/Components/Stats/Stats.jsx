const Stats = () => {
  return (
    <div className="flex justify-evenly items-center gap-10 py-10 text-center bg-blue-900 text-white">
      <div className="w-1/3 border-r border-white/30">
        <h2 className="text-3xl font-bold">50K+</h2>
        <p>Active Users</p>
      </div>
      <div className="w-1/3 border-r border-white/30">
        <h2 className="text-3xl font-bold">200+</h2>
        <p>Premium Tools</p>
      </div>
      <div className="w-1/3">
        <h2 className="text-3xl font-bold">4.9</h2>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default Stats;
