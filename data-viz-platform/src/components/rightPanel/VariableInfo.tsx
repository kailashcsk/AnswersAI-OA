import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { XIcon } from 'lucide-react';

interface VariableInfoProps {
  variableId: string;
}

const VariableInfo: React.FC<VariableInfoProps> = ({ variableId }) => {
  const variable = useSelector((state: RootState) => {
    const allCategories = state.rightPanel.categories;
    for (const category of Object.values(allCategories)) {
      const found = category.find(v => v.id === variableId);
      if (found) return found;
    }
    return null;
  });

  if (!variable) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#2A2A2A] p-6 border-t border-[#3A3A3A]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium">{variable.name}</h3>
        <button className="text-gray-400 hover:text-white">
          <XIcon size={20} />
        </button>
      </div>
      <p className="text-gray-400 text-sm">
        But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.
      </p>
    </div>
  );
};

export default VariableInfo;