export const SkeletonLoader = ({ className }) => <div className={`bg-neutral-200 rounded animate-pulse ${className}`} />;
export const FullPageLoader = () => (
    <div className="fixed inset-0 bg-gradient-primary flex flex-col items-center justify-center z-[100]">
        <div className="flex space-x-3">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 bg-white rounded-full animate-pulse [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
        </div>
        <p className="text-center font-bold text-xl text-white mt-6">Analyzing...</p>
    </div>
);
