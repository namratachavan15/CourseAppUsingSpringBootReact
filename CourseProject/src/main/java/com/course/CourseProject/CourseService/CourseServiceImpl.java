package com.course.CourseProject.CourseService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.CourseProject.Dao.CourseDao;
import com.course.CourseProject.Exception.ResourceNotFoundException;
import com.course.CourseProject.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;
	
	//List<Course> list;
	
	public CourseServiceImpl() {
		//super();
			//list = new ArrayList<>();
			//list.add(new Course(145,"Java Core","This course contain basic"));
			//list.add(new Course(1524,"spring boot course","creating rest api using spring"));
	}

	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
	
		return courseDao.findAll();
		
	}

	@Override
	public Course getCourse(long courseId) {
		// TODO Auto-generated method stub
		
		/*
		 * Course c=null; for(Course course:list) { if(course.getId()==courseId) {
		 * c=course; break; } }
		 */
		
	//	return courseDao.getOne(courseId);
		try {
	        // Find course by ID or throw ResourceNotFoundException if not found
	        return courseDao.findById(courseId)
	            .orElseThrow(() -> new ResourceNotFoundException("Course not found"));
	    } catch (ResourceNotFoundException e) {
	        // Handle the exception: log it, return null, or rethrow a different exception
	        // For example, rethrow as a runtime exception
	        throw new RuntimeException("Course not found with id " + courseId, e);
	    }
	}

	@Override
	public Course addCourse(Course course) {
		
	//	list.add(course);
		courseDao.save(course);
		
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
		/*
		 * list.forEach(e->{ if(e.getId()== course.getId()) {
		 * e.setTitle(course.getTitle()); e.setDescription(course.getDescription()); }
		 * });
		 */
		
		//courseDao.save(course);
		
		//return course;
		Course existingCourse = courseDao.findById(course.getId()).orElse(null);
	    if (existingCourse != null) {
	        existingCourse.setTitle(course.getTitle());
	        existingCourse.setDescription(course.getDescription());
	        return courseDao.save(existingCourse);
	    }
	    return null;
	}

	@Override
	public void deleteCourse(long parseLong) {
		// TODO Auto-generated method stub
		/*
		 * list = this.list.stream() .filter(e -> e.getId() != parseLong)
		 * .collect(Collectors.toList()); // Corrected here
		 */	
	 Course entity = courseDao.getOne(parseLong);
	 courseDao.delete(entity);
	
	}

	@Override
	public List<Course> searchCourses(String keyword) {
		 if (keyword != null && !keyword.isEmpty()) {
	            return courseDao.findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(keyword, keyword);
	        } else {
	            return courseDao.findAll();  // Return all courses if no keyword is provided
	        }
	}

}
