import Course from './course.model'; // Assuming you have a Mongoose model for Course
import ICourse from './course.interface';
import { basicFields } from './dto';
import { basicFields as mediaFields, minimalFields as mediaMinFields } from '../media/dto';

export class CourseService {
  async getCourses(query: object): Promise<Partial<ICourse[]> | null> {
    try {
      return await Course.find(query).lean().exec();
    } catch (error) {
      return error;
    }
  }

  // Fetch a Course by their ID
  async getCourseById(courseId: string, extractFields: string = basicFields): Promise<Partial<ICourse> | null> {
    try {
      return await Course.findById(courseId, extractFields).lean().exec();
    } catch (error) {
      return error;
    }
  }

  async getCourseByUri(query: object, extractFields: string = basicFields): Promise<Partial<ICourse> | null> {
    try {
      return await Course.findOne({ ...query }, extractFields)
        .populate([
          { path: 'media', model: 'Media', select: mediaFields, strictPopulate: false },
          { path: 'attachments', model: 'Media', select: mediaFields, strictPopulate: false },
          { path: 'instructor.avatar', model: 'Media', select: mediaMinFields, strictPopulate: false },
        ])
        .lean()
        .exec();
    } catch (error) {
      return error;
    }
  }

  // Create a new Course
  async createCourse(CourseData: ICourse): Promise<Partial<ICourse>> {
    try {
      const newCourse = new Course(CourseData);
      return await newCourse.save();
    } catch (error) {
      throw new Error(`Error creating Course: ${error.message}`);
    }
  }

  // Update a Course
  async updateCourse(CourseId: string, updatedData: Partial<ICourse>): Promise<Partial<ICourse> | null> {
    try {
      return await Course.findByIdAndUpdate(CourseId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Course ${CourseId}: ${error.message}`);
    }
  }

  // Delete a Course
  async deleteCourse(CourseId: string): Promise<Partial<ICourse> | null> {
    try {
      return await Course.findByIdAndRemove(CourseId).exec();
    } catch (error) {
      throw new Error(`Error deleting Course ${CourseId}: ${error.message}`);
    }
  }

  // Other methods related to Courses (e.g., search, login, password reset, etc.)
}
