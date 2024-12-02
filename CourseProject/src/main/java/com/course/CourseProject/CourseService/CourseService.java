package com.course.CourseProject.CourseService;

import java.util.List;

import com.course.CourseProject.entities.Course;

public interface CourseService {

	public List<Course> getCourses();
	
	public Course addCourse(Course course);

    public Course getCourse(long courseId);

	public Course updateCourse(Course course);

	public void deleteCourse(long parseLong);
	
	public List<Course> searchCourses(String keyword);
    
}
