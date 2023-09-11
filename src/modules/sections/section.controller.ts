import { Request, Response } from 'express';
import { SectionService } from './section.service';
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
    res.json(section);
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
    const { subtitle, title, _id } = section;
    res.json({ subtitle, title, _id });
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
