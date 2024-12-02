package com.course.CourseProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.course.CourseProject.CourseService.CourseService;
import com.course.CourseProject.entities.Course;

@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
public class MyController {

	@Autowired
	private CourseService courseService;

	@GetMapping("/courses")
	public List<Course> getCourses() {
		System.out.println("inside fun");
		return this.courseService.getCourses();

	}

	/*
	 * @GetMapping("/course/{courseId}") public Course getCourse(@PathVariable
	 * String courseId) { return
	 * this.courseService.getCourse(Long.parseLong(courseId)); }
	 */

	@GetMapping("/course/{courseId}")
	public ResponseEntity<?> getCourse(@PathVariable String courseId) {
		try {
			Course course = this.courseService.getCourse(Long.parseLong(courseId));
			
			return ResponseEntity.ok(course);
		} catch (NumberFormatException e) {
			return ResponseEntity.badRequest().body("Invalid courseId");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching course");
		}
	}

	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}

	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}

	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId) {
		try {

			courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			
		}

	}
	// Endpoint to search courses by title or description
    @GetMapping("/courses/search")
    public List<Course> searchCourses(@RequestParam String keyword) {
        return courseService.searchCourses(keyword);
    }

  

}
