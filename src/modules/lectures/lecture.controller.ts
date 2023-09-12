import { Request, Response } from 'express';
import { LectureService } from './lecture.service';
const lectureService = new LectureService();
export const getLectures = async (req: Request, res: Response) => {
  try {
    const lectures = await lectureService.getLectures();
    if (!lectures) {
      return res.status(404).json({ message: 'lectures not found' });
    }
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ error: 'getLectures', message: error.message });
  }
};
export const getLectureById = async (req: Request, res: Response) => {
  try {
    const lectureId = req.params.id;
    const lecture = await lectureService.getLectureById(lectureId);
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.json(lecture);
  } catch (error) {
    res.status(500).json({ error: 'getLectureByUri', message: error.message });
  }
};
export const createLecture = async (req: Request, res: Response) => {
  try {
    const lectureBody = req.body;
    const lecture = await lectureService.createLecture(lectureBody);
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.json(lecture);
  } catch (error) {
    res.status(500).json({ error: 'createLecture', message: error.message });
  }
};

export const createMultiLectures = async (req: Request, res: Response) => {
  try {
    const lectureBody = req.body.lectures;
    const lectures = await lectureService.createMultiLectures(lectureBody);
    if (!lectures) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ error: 'createLecture', message: error.message });
  }
};
export const updateLecture = async (req: Request, res: Response) => {
  try {
    const lectureId = req.params.id;
    const lecture = await lectureService.updateLecture(lectureId, req.body);
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    const { subtitle, title, _id } = lecture;
    res.json({ subtitle, title, _id });
  } catch (error) {
    res.status(500).json({ error: 'updateLecture', message: error.message });
  }
};
export const deleteLecture = async (req: Request, res: Response) => {
  try {
    const lectureId = req.params.id;
    const lecture = await lectureService.deleteLecture(lectureId);
    res.json(lecture);
  } catch (error) {
    res.status(500).json({ error: 'deleteLecture', message: error.message });
  }
};

// ... more routes for creating, updating, deleting lectures
