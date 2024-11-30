import  { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { setUser } from './store/silces/authSlice';
import DashboardPage from './pages/Dashboard';
import AuthForm from './pages/AuthForm';
import PrivateRoute from './components/shared/PrivateRoute';

// Separate component to use hooks
const AppContent = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;