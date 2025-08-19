import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { NotificationProvider } from './contexts/NotificationContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { queryClient } from './config/queryClient';
import theme from './theme';
import MainLayout from './components/Layout/MainLayout';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import LoginPage from './pages/Auth/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import LogMealPage from './pages/Meals/LogMealPage';
import FoodSearchPage from './pages/Food/FoodSearchPage';
import StatisticsPage from './pages/Statistics/StatisticsPage';
import GoalsPage from './pages/Goals/GoalsPage';
import SettingsPage from './pages/Settings/SettingsPage';

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <LoadingProvider>
              <NotificationProvider>
                <Router>
                  <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                      path="/"
                      element={
                        <ProtectedRoute>
                          <MainLayout>
                            <DashboardPage />
                          </MainLayout>
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/log-meal"
                      element={
                        <ProtectedRoute>
                          <MainLayout>
                            <LogMealPage />
                          </MainLayout>
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/food-search"
                      element={
                        <ProtectedRoute>
                          <MainLayout>
                            <FoodSearchPage />
                          </MainLayout>
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/statistics"
                      element={
                        <ProtectedRoute>
                          <MainLayout>
                            <StatisticsPage />
                          </MainLayout>
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/goals"
                      element={
                        <ProtectedRoute>
                          <MainLayout>
                            <GoalsPage />
                          </MainLayout>
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/settings"
                      element={
                        <ProtectedRoute>
                          <MainLayout>
                            <SettingsPage />
                          </MainLayout>
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                </Router>
              </NotificationProvider>
            </LoadingProvider>
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
