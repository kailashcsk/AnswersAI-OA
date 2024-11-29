const LoadingSpinner = () => {
    return (
        <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-[#DCFF7FFD] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-neutral-400">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;