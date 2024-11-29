import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Home, Bell, BarChart2, Building2, Settings, LogOut, Menu } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { clearAuth } from '../../store/silces/authSlice';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const navigationItems = [
        { icon: Home, path: '/', label: 'Home' },
        { icon: Bell, path: '/notifications', label: 'Notifications' },
        { icon: BarChart2, path: '/dashboard', label: 'Dashboard' },
        { icon: Building2, path: '/building', label: 'Building' },
        { icon: Settings, path: '/settings', label: 'Settings' }
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
        <aside className={`bg-black flex flex-col h-screen fixed left-0 top-0 transition-all duration-300 ${isExpanded ? 'w-48' : 'w-16'}`}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-14 flex items-center justify-center hover:bg-neutral-900 transition-colors border-b border-neutral-800"
            >
                <Menu className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
            </button>

            {navigationItems.map(({ icon: Icon, path, label }) => (
                <Link
                    key={path}
                    to={path}
                    className={`h-16 flex items-center transition-colors
                        ${isExpanded ? 'px-4 gap-3' : 'justify-center'}
                        ${location.pathname === path
                            ? 'bg-neutral-900 text-white'
                            : 'text-neutral-500 hover:bg-neutral-900 hover:text-white'}`}
                >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                    {isExpanded && <span className="text-sm">{label}</span>}
                </Link>
            ))}

            <div className="mt-auto border-t border-neutral-800">
                <button
                    onClick={handleLogout}
                    className={`h-16 w-full flex items-center transition-colors text-neutral-500 hover:bg-neutral-900 hover:text-white
                        ${isExpanded ? 'px-4 gap-3' : 'justify-center'}`}
                >
                    <LogOut className="w-5 h-5" strokeWidth={1.5} />
                    {isExpanded && <span className="text-sm">Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;