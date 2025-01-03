import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import StudentPage from './pages/StudentPage';
import StudentLayout from './layouts/StudentLayout';
import TeacherLayout from './layouts/TeacherLayout';
import { Navigate } from 'react-router-dom';

// protected Route Component
const ProtectedRoute = ({ children, allowedUserType }) => {
 const token = localStorage.getItem('token');
 const userType = localStorage.getItem('userType');

 if (!token) {
   return <Navigate to="/login" />;
 }

 if (allowedUserType && userType !== allowedUserType) {
   return <Navigate to="/" />;
 }

 return children;
};

const router = createBrowserRouter(
 createRoutesFromElements(
   <>
     <Route path='/' element={<MainLayout/>}>
       <Route index element={<HomePage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/register' element={<RegistrationPage/>}/>
     </Route>

     <Route path="/student" element={
       <ProtectedRoute allowedUserType="student">
         <StudentLayout />
       </ProtectedRoute>
     }>
       <Route index element={<StudentPage/>}/>
       <Route path="AppTable" element={<AppTable/>}/>
       <Route path="requests" element={<RequestPage/>}/>
       <Route path="profile" element={<StudentProfile/>}/>
       <Route path="themes" element={<StudentThemes/>}/>
       <Route path="studentlists" element={<StudentlistS/>}/>
       <Route path="studentsprofiles" element={<StudentsProfileS/>}/>
     </Route>

     <Route path='/teacher' element={
       <ProtectedRoute allowedUserType="teacher">
         <TeacherLayout/>
       </ProtectedRoute>
     }>
       <Route index element={<Teacherpage/>}/>
       <Route path='Studentslist' element={<Studentslist/>}/>
       <Route path='Teacherlist' element={<Teacherlist/>}/>
       <Route path='Trequest' element={<Trequest/>}/>
       <Route path='Calendar' element={<CalendarPage/>}/>
       <Route path='/teacher/:id' element={<TeacherProfile/>}/>
       <Route path='HelpPage' element={<HelpPage/>}/>
       <Route path='tprofile' element={<Tprofile/>}/>
     </Route>
   </>
 )
);

const App = () => {
 return <RouterProvider router={router}/>;
}

export default App;