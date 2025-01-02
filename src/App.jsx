import React from 'react'
import { Route , createBrowserRouter , createRoutesFromElements,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import StudentPage from './pages/StudentPage';
import StudentLayout from './layouts/StudentLayout';
import AppTable from './pages/AppTable';
import RequestPage from './pages/student/RequestPage';
import StudentProfile from './pages/student/StudentProfile';
import StudentThemes from './pages/student/StudentThemes';
import StudentlistS from './pages/student/StudentListS';
import StudentsProfileS from './pages/student/StudentsProfileS';


import TeacherLayout from './layouts/TeacherLayout';
import Teacherpage from './pages/teacher/Teacherpage';
import Studentslist from './pages/teacher/Studentslist';
import Teacherlist from './pages/teacher/Teacherlist';
import Trequest from './pages/teacher/Trequest'
import CalendarPage from './pages/teacher/Calendar';
import TeacherProfile from './pages/teacher/teacherProfile'
import Tprofile from './pages/teacher/tprofile';
import HelpPage from './pages/teacher/HelpPage';
import Chat from './pages/teacher/chat';

const router = createBrowserRouter(
  
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegistrationPage/>}/>
        </Route>



        {/* student layout */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentPage/>}/>
          <Route path="AppTable" element={<AppTable />} />
          <Route path="requests" element={<RequestPage />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="themes" element={<StudentThemes />} />
          <Route path="studentlists" element={<StudentlistS />} />

          <Route path="studentsprofiles" element={<StudentsProfileS />} />

        </Route>


            {/* teacher layout */}
        <Route path='/teacher' element={<TeacherLayout/>}>
          <Route index element={<Teacherpage/>}></Route>
          <Route path='Studentslist' element={<Studentslist/>}></Route>
          <Route path='Teacherlist' element={<Teacherlist/>}></Route>
          <Route path='Trequest' element={<Trequest/>}></Route>
          <Route path='Calendar' element={<CalendarPage/>}></Route>
          <Route path='/teacher/:id' element={<TeacherProfile/>}></Route>
          <Route path='HelpPage' element={<HelpPage/>}></Route>
          <Route path='profile' element={<Tprofile/>}></Route>
          <Route path='chat' element={<Chat/>}></Route>
        </Route>
      </>
    )
  

);

const App = () => {
  

  return <RouterProvider router={router}/>
  
}

export default App