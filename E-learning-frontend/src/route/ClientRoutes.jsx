import {  Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import React from 'react';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Home from '../pages/Home/Home';
import QuizzPlay from '../pages/Quizz/QuizzPlay'
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Courses from '../pages/Courses/NewCourses';
import Profile from '../pages/Profile/Profile';
import { Logout } from '@mui/icons-material';
import CourseDetails from '../pages/Courses/CourseDetails';
import CourseContent from '../pages/Courses/CourseContent';
import QuizSolution from '../pages/Quizz/QuizSolution';
import Interview from '../pages/Interview/Interview';
import  ContactUS  from '../pages/Contact/ContactUS'
import PeerToPeer from '../pages/Interview/PeerToPeer';
import ExploreQuizzesPage from '../pages/Quizz/Qizzes';
function ComponentsRouter() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/quizzes' element={<ExploreQuizzesPage/>}/>
        <Route path='/quizzes/:id' element={<QuizzPlay/>}/>
        <Route path='/quizzes/:id/solution' element={<QuizSolution/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<CourseDetails/>} />
        <Route path="/courses/:id/content" element={<CourseContent/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/interview' element={<Interview/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path = '/contact' element = {<ContactUS/>}/>
        <Route path = '/peertopeer' element = {<PeerToPeer/>}/>

</Routes>

  
  );
}

export default ComponentsRouter;
