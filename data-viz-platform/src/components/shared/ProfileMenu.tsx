import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

interface ProfileMenuProps {
    onLogout: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="mt-auto" ref={dropdownRef}>
            <div className="relative flex flex-col items-center">
                {isOpen && (
                    <button
                        onClick={() => {
                            onLogout();
                            setIsOpen(false);
                        }}
                        className="absolute bottom-16 flex items-center justify-center"
                        type="button"
                    >
                        <div className="p-3 rounded-[10px] bg-[#242424] border-0.5 border-[#525252] flex items-center justify-center
              h-[40px] w-[40px]">
                            <FontAwesomeIcon
                                icon={faRightFromBracket}
                                className="w-5 h-5 text-[#858882] hover:text-white"
                            />
                        </div>
                    </button>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-16 w-full flex items-center justify-center pb-4"
                    type="button"
                >
                    <div
                        className={`
              p-3
              rounded-xl
              transition-colors
              rounded-[10px]
              flex items-center justify-center
                h-[40px] w-[40px]
              ${isOpen ? 'bg-black' : 'hover:bg-[#242424] '}
            `}
                    >
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            className={`
                w-5 
                h-5 
                ${isOpen ? 'text-[#FFFFF]' : ' hover:text-white'}
              `}
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ProfileMenu;