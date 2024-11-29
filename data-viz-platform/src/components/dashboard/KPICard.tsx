import React from 'react';

interface KPICardProps {
    id: string;
    title: string;
    value: string | number;
    description: string;
    icon?: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, description, icon }) => {
    return (
        <div className="bg-[#1C1C1C] p-4 rounded-lg border border-[#2A2A2A]">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">{title}</h3>
                {icon && (
                    <button className="text-gray-400 hover:text-white">
                        {icon}
                    </button>
                )}
            </div>
            <div className="space-y-2">
                <p className="text-2xl font-semibold">{value}</p>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default KPICard;