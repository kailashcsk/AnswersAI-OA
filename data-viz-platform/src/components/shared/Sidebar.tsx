import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { clearAuth } from '../../store/silces/authSlice';
import ProfileMenu from './ProfileMenu';

// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faBell,
    faClipboardList,
    faGear,
    faUserCircle,
    faBars,
    faCloudArrowUp
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigationItems = [
        { icon: faHome, path: '/', label: 'Home' },
        { icon: faBell, path: '/notifications', label: 'Notifications' },
        { icon: faClipboardList, path: '/dashboard', label: 'Dashboard' },
        { icon: faCloudArrowUp, path: '/building', label: 'Building' },
        { icon: faGear, path: '/settings', label: 'Settings' }
    ];

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch(clearAuth());
            navigate('/auth');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <aside className={`bg-black flex flex-col h-screen fixed left-0 top-0 transition-all duration-300 w-[80px]  `}>
            <button
                onClick={() => navigate('/')}
                className="h-[79px] flex items-center justify-center"
                type="button"
            >
                <div className="p-3 pt-5 rounded-[10px] transition-colors flex items-center justify-center h-[40px] w-[40px]">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="w-5 h-5 text-white"
                    />
                </div>
            </button>

            <nav className="flex flex-col">
                {navigationItems.map(({ icon, path }) => (
                    <Link
                        key={path}
                        to={path}
                        className="h-14 flex items-center justify-center relative"
                    >
                        <div
                            className={`
              p-3
              rounded-[10px]
              flex items-center justify-center
              h-[40px] w-[40px]
              transition-colors
              ${location.pathname === path
                                ? 'bg-[#242424] border-0.5 border-[#525252]'
                                : 'hover:bg-[#242424]'
                                }
            `}
                        >
                            <FontAwesomeIcon
                                icon={icon}
                                className={`
                w-5 
                h-5 
                ${location.pathname === path
                                    ? 'text-[#FFFFFF]'
                                    : 'text-[#858882] hover:text-[#FFFFFF]'
                                    }
              `}
                            />
                        </div>
                    </Link>
                ))}
            </nav>


            <ProfileMenu onLogout={handleLogout} />
        </aside>
    );
};

export default Sidebar;