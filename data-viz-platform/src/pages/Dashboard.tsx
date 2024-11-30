import { useSelector } from 'react-redux';
import Header from '../layouts/Header';
import DashboardLayout from '../layouts/DashboardLayout';
import Sidebar from '../components/shared/Sidebar';
import { RootState } from '../store/store';

const DashboardPage = () => {
    const isRightPanelOpen = useSelector((state: RootState) => state.rightPanel.isOpen);

    return (
        <div className="h-screen flex bg-black">
            {/* Sidebar - hidden on small screens, visible from medium screens up */}
            <div className={`hidden md:block transition-all duration-300 ease-in-out ${isRightPanelOpen ? 'blur-[2px] pointer-events-none' : ''
                }`}>
                <Sidebar />
            </div>

            {/* Main content area - adjusts margin based on screen size */}
            <div className="flex-1 flex flex-col ml-0 md:ml-16">
                {/* Header - hidden on small screens, visible from medium screens up */}
                <div className={`hidden md:block transition-all duration-300 ease-in-out ${isRightPanelOpen ? 'blur-[2px] pointer-events-none' : ''
                    }`}>
                    <Header />
                </div>

                {/* Main content - full width on small screens */}
                <main className="flex-1 min-h-0 overflow-hidden pl-0 md:pl-4">
                    <DashboardLayout />
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;