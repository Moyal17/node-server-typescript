import { NextFunction, Request, Response } from 'express';
import { CourseService } from './course.service';
import { ExtendedRequest, QueryType } from '../shared/types';
import { LessonObject } from '../lessons/dto';
import { adminBasicFields, basicFields } from './dto';
import { generateId } from '../../utils';
import { getPaginationParams } from '../shared/utils';

const courseService = new CourseService();

const configCourseObject = (courseBody: any) => {
  try {
    if (courseBody.instructorName || courseBody.instructorAvatar || courseBody.instructorLocation) {
      courseBody.instructor = {
        name: courseBody.instructorName,
        avatar: courseBody.instructorAvatar,
        location: courseBody.instructorLocation,
      };
    }
    return courseBody;
  } catch (e) {
    console.error('configCourseObject: ', e);
  }
};
export const getCourses = async (req: ExtendedRequest, res: Response) => {
  try {
    const { cursor, limit } = getPaginationParams(req.query);
    const query: QueryType = req.isPublic ? { isPublic: true, isRemoved: false } : { isRemoved: false };
    if (cursor) {
      query['_id'] = { $gt: cursor };
    }
    const courses = await courseService.getCourses(query, basicFields, limit);
    if (!courses) {
      return res.status(404).json({ message: 'not found' });
    }
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'getCourses', message: error.message });
  }
};

export const getAdminCourses = async (req: ExtendedRequest, res: Response) => {
  try {
    const { cursor, limit } = getPaginationParams(req.query);
    const query: QueryType = { isRemoved: false };
    if (cursor) {
      query['_id'] = { $gt: cursor };
    }
    const courses = await courseService.getAdminCourses(query, adminBasicFields, limit);
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

export const getCourseDetailsByUri = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    const courseUri = req.params.uri;
    const query = req.isPublic ? { uri: courseUri, isPublic: true, isRemoved: false } : { uri: courseUri, isRemoved: false };
    const course = await courseService.getCourseByUri(query, basicFields);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    req.course = course;
    next();
  } catch (error) {
    res.status(500).json({ error: 'getCourseByUri', message: error.message });
  }
};
export const createCourse = async (req: Request, res: Response) => {
  try {
    const courseBody = configCourseObject({ ...req.body });
    courseBody.uri = `${courseBody.uri}-${generateId(6)}`;
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
    const courseBody = configCourseObject({ ...req.body });
    delete courseBody._id;
    const course = await courseService.updateCourse(courseId, courseBody);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json();
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

export const handleFullCourseObject = async (req: ExtendedRequest, res: Response) => {
  try {
    let lessonsBySectionId: { [key: string]: Partial<LessonObject>[] } = {};
    // handle lessons into each section
    if (req.lessons && req.lessons?.length > 0) {
      lessonsBySectionId = req.lessons.reduce((acc: { [key: string]: Partial<LessonObject>[] }, lesson: any) => {
        if (lesson && lesson.sectionId) {
          acc[lesson.sectionId as string] = acc[lesson.sectionId as string] || [];
          acc[lesson.sectionId as string].push(lesson);
        }
        return acc;
      }, {});
    }
    if (req.sections && req.sections?.length > 0) {
      req.sections.forEach((section) => {
        section!.lessons = lessonsBySectionId[section!._id as string];
      });
    }
    res.json({ ...req.course, sections: req.sections });
  } catch (error) {
    res.status(500).json({ error: 'handleFullCourseObject', message: error.message });
  }
};
// ... more routes for creating, updating, deleting courses
