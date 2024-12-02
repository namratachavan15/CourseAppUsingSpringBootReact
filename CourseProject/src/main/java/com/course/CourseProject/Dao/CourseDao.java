package com.course.CourseProject.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.course.CourseProject.entities.Course;

import java.security.PublicKey;
import java.util.List;


@Repository
public interface CourseDao extends JpaRepository<Course, Long> {

	// Custom method to search courses by title or description
    List<Course> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String title, String description);
}
