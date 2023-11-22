import Lesson from './lesson.model';
import ILesson from './lesson.interface';
import { basicFields } from './dto';
import { minimalFields as courseFields } from '../courses/dto';
import { basicFields as mediaFields, minimalFields as mediaMinFields } from '../media/dto';

export class LessonService {
  async getLessons(query = {}, extractFields: string = basicFields): Promise<Partial<ILesson[]> | null> {
    try {
      return await Lesson.find(query, extractFields).lean().exec();
    } catch (error) {
      return error;
    }
  }

  async getLessonsCount(courseId: string): Promise<number | null> {
    try {
      return await Lesson.countDocuments({ courseId }).lean().exec();
    } catch (error) {
      throw new Error(`Error check course Id ${courseId}: ${error.message}`);
    }
  }

  async getLessonById(lessonId: string, extractFields: string = basicFields): Promise<Partial<ILesson> | null> {
    try {
      return await Lesson.findById(lessonId, extractFields)
        .populate([
          { path: 'media', model: 'Media', select: mediaFields, strictPopulate: false },
          { path: 'attachments', model: 'Media', select: mediaFields, strictPopulate: false },
        ])
        .lean()
        .exec();
    } catch (error) {
      return error;
    }
  }

  async getLessonDetails(uri: string, extractFields: string = basicFields): Promise<Partial<ILesson> | null> {
    try {
      return await Lesson.findOne({ uri }, extractFields)
        .populate([
          {
            path: 'courseId',
            model: 'Course',
            select: courseFields,
            populate: [
              {
                path: 'media',
                strictPopulate: false,
                select: 'thumbnail',
              },
              { path: 'instructor.avatar', model: 'Media', select: mediaMinFields, strictPopulate: false },
            ],
          },
          { path: 'media', model: 'Media', select: mediaFields, strictPopulate: false },
          { path: 'attachments', model: 'Media', select: mediaFields, strictPopulate: false },
        ])
        .lean()
        .exec();
    } catch (error) {
      return error;
    }
  }

  async createLesson(LessonData: ILesson): Promise<Partial<ILesson>> {
    try {
      const newLesson = new Lesson(LessonData);
      return await newLesson.save();
    } catch (error) {
      throw new Error(`Error creating Lesson: ${error.message}`);
    }
  }
  async createMultiLessons(Lessons: ILesson[]): Promise<Partial<ILesson>[]> {
    try {
      return await Lesson.insertMany(Lessons, { ordered: true });
    } catch (error) {
      throw new Error(`Error creating Lesson: ${error.message}`);
    }
  }

  // Update a Lesson
  async updateLesson(LessonId: string, updatedData: Partial<ILesson>): Promise<Partial<ILesson> | null> {
    try {
      return await Lesson.findByIdAndUpdate(LessonId, updatedData, { new: true }).exec();
    } catch (error) {
      throw new Error(`Error updating Lesson ${LessonId}: ${error.message}`);
    }
  }

  // Delete a Lesson
  async archiveLesson(LessonId: string): Promise<Partial<ILesson> | null> {
    try {
      return await Lesson.findByIdAndUpdate(LessonId, { isRemoved: true }).exec();
    } catch (error) {
      throw new Error(`Error deleting Lesson ${LessonId}: ${error.message}`);
    }
  }

  async unArchiveLesson(LessonId: string): Promise<Partial<ILesson> | null> {
    try {
      return await Lesson.findByIdAndUpdate(LessonId, { isRemoved: false }).exec();
    } catch (error) {
      throw new Error(`Error deleting Lesson ${LessonId}: ${error.message}`);
    }
  }

  async deleteLesson(LessonId: string): Promise<Partial<ILesson> | null> {
    try {
      return await Lesson.findByIdAndRemove(LessonId).exec();
    } catch (error) {
      throw new Error(`Error deleting Lesson ${LessonId}: ${error.message}`);
    }
  }

  // Other methods related to Lessons (e.g., search, login, password reset, etc.)
}
