import { useSelector } from 'react-redux';
import Header from '../layouts/Header';
import DashboardLayout from '../layouts/DashboardLayout';
import Sidebar from '../components/shared/Sidebar';
import { RootState } from '../store/store';

const DashboardPage = () => {
    const isRightPanelOpen = useSelector((state: RootState) => state.rightPanel.isOpen);

    return (
        <div className="h-screen flex bg-black">
            <div className={`transition-all duration-300 ease-in-out ${isRightPanelOpen ? 'blur-[2px] pointer-events-none' : ''}`}>
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col ml-16">
                <div className={`transition-all duration-300 ease-in-out ${isRightPanelOpen ? 'blur-[2px] pointer-events-none' : ''}`}>
                    <Header />
                </div>
                <main className="flex-1 min-h-0 overflow-hidden pl-4">
                    <DashboardLayout />
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;