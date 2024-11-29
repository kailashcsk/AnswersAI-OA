import React from 'react';
import Header from '../layouts/Header';
import DashboardLayout from '../layouts/DashboardLayout';
import Sidebar from '../components/shared/Sidebar';

const DashboardPage = () => {
    return (
        <div className="h-screen flex bg-black">
            <Sidebar />
            <div className="flex-1 flex flex-col ml-16">
                <Header />
                <main className="flex-1 min-h-0 overflow-hidden">
                    <DashboardLayout />
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;