'use client'
import { useState,useEffect } from 'react';
import Courses from './components/courses/Courses'
import Loading from './loading';
import CourseSearch from './components/courses/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Welcome to Trav Tut</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)}/>
      <Courses courses={courses} />
    </>
  )
}

export default HomePage