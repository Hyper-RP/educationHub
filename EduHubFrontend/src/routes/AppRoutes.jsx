
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserSignIn from '../pages/UserSignIn';
import AdminSignIn from '../pages/AdminSignIn';
import UserDashboard from '../pages/user/UserDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import Courses from '../pages/user/Courses';
import CourseDetails from '../pages/CourseDetails';
import UserProfile from '../pages/user/UserProfile';
import ManageCourses from '../pages/admin/ManageCourses';
import ManageUsers from '../pages/admin/ManageUsers';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/signin" element={<UserSignIn />} />
    <Route path="/admin/signin" element={<AdminSignIn />} />
    <Route path="/user/dashboard" element={<UserDashboard />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/course/:id" element={<CourseDetails />} />
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/admin/courses" element={<ManageCourses />} />
    <Route path="/admin/users" element={<ManageUsers />} />
  </Routes>
);

export default AppRoutes;
