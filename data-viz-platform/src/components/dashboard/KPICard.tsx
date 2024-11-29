import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

interface KPICardProps {
    id: string;
    title: string;
    value: string | number;
    description: string;
}



const KPICard: React.FC<KPICardProps> = ({ title, value, description }) => {
    return (
        <div className="bg-[#222324] p-[30px] rounded-lg h-[236px] flex flex-col justify-between border border-[#525252]">
            <div className="flex justify-between items-start pt-2">
                <div>
                    <div className='pb-2'>
                        <h3 className="text-[#FFFFFF] font-inter font-[500] text-[18px] leading-[21.78px] ">{title}</h3>
                    </div>
                    <div>
                        <p className="text-[#BBBBBB] font-inter font-[300] text-[12px] leading-[18px]">{description}</p>
                    </div>  
                </div>

                    

                
                <FontAwesomeIcon icon={faCircleQuestion} className="text-[#888888] w-[14px] h-[14px]"/>
            </div>
                
            
            <div className="space-y-2">
               
                <p className="text-[#FFFFFF] font-roobert font-[700] text-[32px] leading-[28.16px] text-right">{value}</p>
                
            </div>
        </div>
    );
};

export default KPICard;