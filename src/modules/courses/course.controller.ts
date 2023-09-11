import { Request, Response } from 'express';
import { CourseService } from './course.service';
const courseService = new CourseService();
export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getCourses();
    if (!courses) {
      return res.status(404).json({ message: 'courses not found' });
    }
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'getCourses', message: error.message });
  }
};
export const getCourseById = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id;
    const course = await courseService.getCourseById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'getCourseByUri', message: error.message });
  }
};
export const createCourse = async (req: Request, res: Response) => {
  try {
    const courseBody = req.body;
    const course = await courseService.createCourse(courseBody);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'createCourse', message: error.message });
  }
};
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id;
    const course = await courseService.updateCourse(courseId, req.body);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    const { subtitle, title, _id } = course;
    res.json({ subtitle, title, _id });
  } catch (error) {
    res.status(500).json({ error: 'updateCourse', message: error.message });
  }
};
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id;
    const course = await courseService.deleteCourse(courseId);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'deleteCourse', message: error.message });
  }
};

// ... more routes for creating, updating, deleting courses
