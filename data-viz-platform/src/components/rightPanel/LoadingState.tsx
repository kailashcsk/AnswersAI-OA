import React from 'react';

const LoadingState: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#B4FF39] border-t-transparent" />
        </div>
    );
};

export default LoadingState;