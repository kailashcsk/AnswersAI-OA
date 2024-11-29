import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import DashboardPage from './pages/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-[#1C1C1C] text-white">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;