import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Register from './components/auth/Register';
import JobDetail from './components/job/JobDetail.js';
import JobPost from './components/job/JobPost.js';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import { AuthProvider, useAuth } from './hooks/useAuth';
import ApplyJob from './page/ApplyJob';
import Home from './page/Home.js';
import JobSearch from './page/JobSearch';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/search"
              element={
                <PrivateRoute>
                  <JobSearch />
                </PrivateRoute>
              }
            />
            <Route
              path="/apply/:jobId"
              element={
                <PrivateRoute>
                  <ApplyJob />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/post" element={ <PrivateRoute><JobPost /> </PrivateRoute>} />
            <Route path="/jobs/:jobId" element={<PrivateRoute><JobDetail /></PrivateRoute>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
