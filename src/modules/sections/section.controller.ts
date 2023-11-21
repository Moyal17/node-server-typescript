import { NextFunction, Request, Response } from 'express';
import { SectionService } from './section.service';
import { ExtendedRequest } from '../shared/types';

const sectionService = new SectionService();
export const getSections = async (req: Request, res: Response) => {
  try {
    const sections = await sectionService.getSections();
    if (!sections) {
      return res.status(404).json({ message: 'sections not found' });
    }
    res.json(sections);
  } catch (error) {
    res.status(500).json({ error: 'getSections', message: error.message });
  }
};

export const getSectionsByCourseId = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    if ((req.course && req.course._id) || (req.params && req.params.id)) {
      const courseId = req.course ? req.course._id : req.params.id;
      const sections = await sectionService.getSections({ courseId, isRemoved: false });
      if (!sections) {
        return res.status(404).json({ message: 'sections not found' });
      }
      req.sections = sections;
      next();
    } else {
      return res.status(403).json({ message: 'Course ID Is Required' });
    }
  } catch (error) {
    res.status(500).json({ error: 'getSections', message: error.message });
  }
};

export const getSectionById = async (req: Request, res: Response) => {
  try {
    const sectionId = req.params.id;
    const section = await sectionService.getSectionById(sectionId);
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }
    res.json(section);
  } catch (error) {
    res.status(500).json({ error: 'getSectionByUri', message: error.message });
  }
};
export const createSection = async (req: Request, res: Response) => {
  try {
    const sectionBody = req.body;
    const section = await sectionService.createSection(sectionBody);
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }
    const { subtitle, title, order, duration, courseId, _id } = section;
    res.json({ subtitle, title, order, duration, courseId, _id });
  } catch (error) {
    res.status(500).json({ error: 'createSection', message: error.message });
  }
};
export const updateSection = async (req: Request, res: Response) => {
  try {
    const sectionId = req.params.id;
    const section = await sectionService.updateSection(sectionId, req.body);
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }
    const { subtitle, title, order, duration, _id } = section;
    res.json({ subtitle, title, order, duration, _id });
  } catch (error) {
    res.status(500).json({ error: 'updateSection', message: error.message });
  }
};
export const deleteSection = async (req: Request, res: Response) => {
  try {
    const sectionId = req.params.id;
    const section = await sectionService.deleteSection(sectionId);
    res.json(section);
  } catch (error) {
    res.status(500).json({ error: 'deleteSection', message: error.message });
  }
};

// ... more routes for creating, updating, deleting sections
