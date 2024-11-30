import { Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';

const Header = () => {
    const navigationLinks = [
        { text: 'Charging Stations', path: '/charging-stations', active: true },
        { text: 'Fleet Sizing', path: '/fleet-sizing', active: false },
        { text: 'Parking', path: '/parking', active: false },
    ];

    return (
        <header className="h-[87px] flex items-center justify-between px-6 bg-[#000000]">
            <nav className="flex gap-2 pl-5">
                {navigationLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-3 py-1.5 text-sm transition-colors
                            ${link.active
                            ? 'bg-neutral-800 text-white border-0.67 border-[#5A5A5A] rounded-[5px]'
                            : 'text-[#FFFFFF] hover:bg-neutral-800'
                            } h-[40px] text-center flex items-center rounded-[5px] font-inter font-[500] font-[16px] leading-[24px]`}
                    >
                        {link.text}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center w-[237px] h-[37px] border border-[#5A5A5A] rounded-[5px]">
                <div className="flex items-center bg-[#242424] rounded-[5px] px-3 py-1.5 w-full h-full backdrop-blur-[24.22px] ">
                    <SearchIcon className="h-[19.37px] w-[19.37px] mr-3 text-[#EDEDED] font-[500] leading-[21px] " />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent text-[#EDEDED] placeholder-[#EDEDED] outline-none w-full font-[500] font-[14x] leading-[21px] font-inter"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;