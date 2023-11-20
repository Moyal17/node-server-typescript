import { NextFunction, Request, Response } from 'express';
import { LessonService } from './lesson.service';
import { ExtendedRequest } from '../shared/types';
import { minimalFields } from './dto';

const lessonService = new LessonService();
export const getLessons = async (req: Request, res: Response) => {
  try {
    const lessons = await lessonService.getLessons();
    if (!lessons) {
      return res.status(404).json({ message: 'lessons not found' });
    }
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: 'getLessons', message: error.message });
  }
};
export const getLessonById = async (req: Request, res: Response) => {
  try {
    const lessonId = req.params.id;
    const lesson = await lessonService.getLessonById(lessonId);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: 'getLessonById', message: error.message });
  }
};

export const getLessonDetails = async (req: Request, res: Response) => {
  try {
    const lessonUri = req.params.uri;
    const lesson = await lessonService.getLessonDetails(lessonUri);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    const { courseId, ...lessonDetails } = lesson;
    res.json({ course: courseId, lesson: lessonDetails });
  } catch (error) {
    res.status(500).json({ error: 'getLessonById', message: error.message });
  }
};

export const getLessonsBySectionId = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    if (req.sections && req.sections.length > 0) {
      const sectionIds = req.sections.map((section) => section!._id);
      const query = { sectionId: { $in: sectionIds }, isRemoved: false };
      req.lessons = await lessonService.getLessons(query, minimalFields);
    }
    next();
  } catch (error) {
    res.status(500).json({ error: 'getLessonsBySectionId', message: error.message });
  }
};

export const createLesson = async (req: Request, res: Response) => {
  try {
    const lessonBody = req.body;
    const lesson = await lessonService.createLesson(lessonBody);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: 'createLesson', message: error.message });
  }
};

export const createMultiLessons = async (req: Request, res: Response) => {
  try {
    const lessonBody = req.body.lessons;
    const lessons = await lessonService.createMultiLessons(lessonBody);
    if (!lessons) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: 'createLesson', message: error.message });
  }
};
export const updateLesson = async (req: Request, res: Response) => {
  try {
    const lessonId = req.params.id;
    const lesson = await lessonService.updateLesson(lessonId, req.body);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    const { subtitle, title, _id } = lesson;
    res.json({ subtitle, title, _id });
  } catch (error) {
    res.status(500).json({ error: 'updateLesson', message: error.message });
  }
};
export const deleteLesson = async (req: Request, res: Response) => {
  try {
    const lessonId = req.params.id;
    const lesson = await lessonService.deleteLesson(lessonId);
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: 'deleteLesson', message: error.message });
  }
};

// ... more routes for creating, updating, deleting lessons
