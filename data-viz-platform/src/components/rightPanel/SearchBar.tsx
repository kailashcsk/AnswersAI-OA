import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onAutofill: () => void;
    onRerun: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onAutofill, onRerun }) => {
    return (
        <div className="flex gap-3 w-full">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Carbo|"
                    className="w-full pl-10 pr-3 py-2 bg-[#2A2A2A] text-white rounded-lg 
                     border border-[#3A3A3A] focus:outline-none focus:border-[#B4FF39]
                     placeholder-gray-400"
                />
            </div>

            <button
                onClick={onAutofill}
                className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-[#3A3A3A] transition-colors"
            >
                Autofill
            </button>

            <button
                onClick={onRerun}
                className="px-4 py-2 border border-[#B4FF39] text-[#B4FF39] rounded-lg
                   hover:bg-[#B4FF39]/10 transition-colors"
            >
                Rerun
            </button>
        </div>
    );
};

export default SearchBar;