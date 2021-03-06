import { Routes, Route } from "react-router-dom";
import { ApiController } from "./LessonsContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Course from "./components/Course";
import Syllabus from "./components/Syllabus";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";

import "./styles/router.css";

const AppRouter = () => {
  return (
    <ApiController>
      <div className="siteContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/:lessonId/:chapterId" element={<Course />} />
          <Route path="/dashboard" element={<Syllabus />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz/:lessonId/:questionId" element={<Quiz />} />
          <Route path="/quiz/result/:lessonId" element={<QuizResult />} />
        </Routes>
        <Footer className="footer" />
      </div>
    </ApiController>
  );
};

export default AppRouter;
