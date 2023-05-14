const NFTCardSkeleton = () => {
  return (
    <div className="max-w-sm w-full mx-auto bg-gradient-to-l from-cyan-900 to-cyan-900 bg-black/70 bg-blend-multiply border border-cyan-950 rounded-lg shadow hover:shadow-md group transition-all duration-300 ease-in-out">
      <div className="w-full h-80 overflow-hidden rounded-t-lg shadow">
        <div className="w-full h-full bg-gray-800 animate-pulse"></div>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-50">
          <div className="h-full w-full rounded-full bg-gray-800 animate-pulse text-transparent">
            &nbsp;
          </div>
        </h5>
      </div>
    </div>
  );
};

export default NFTCardSkeleton;
