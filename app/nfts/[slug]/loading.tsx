import NFTCardSkeleton from "@/components/NFTCardSkeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 sm:mx-10 mt-20 py-10">
      {[...Array(8)].map((_, i) => (
        <NFTCardSkeleton key={i} />
      ))}
    </div>
  );
}
