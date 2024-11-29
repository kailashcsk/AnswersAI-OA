import React from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';

const Header = () => {
    const navigationLinks = [
        { text: 'Charging Stations', path: '/charging-stations', active: true },
        { text: 'Fleet Sizing', path: '/fleet-sizing', active: false },
        { text: 'Parking', path: '/parking', active: false },
    ];

    return (
        <header className="h-14 flex items-center justify-between px-4 bg-black border-b border-neutral-800">
            <nav className="flex gap-2">
                {navigationLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors
                            ${link.active
                                ? 'bg-neutral-800 text-white'
                                : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                            }`}
                    >
                        {link.text}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center w-72">
                <div className="flex items-center bg-neutral-900 rounded-lg px-3 py-1.5 w-full">
                    <SearchIcon className="text-neutral-400 h-4 w-4 mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent text-neutral-200 placeholder-neutral-400 outline-none w-full text-sm"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;