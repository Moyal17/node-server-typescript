import Course from './course.model'; // Assuming you have a Mongoose model for Course
import ICourse from './course.interface';
import { basicFields } from './dto'; // Assuming you have a Mongoose model for Course

export class CourseService {
  async getCourses(): Promise<Partial<ICourse[]> | null> {
    try {
      return await Course.find({}).lean().exec();
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

  async getCourseByUri(uri: string, extractFields: string = basicFields): Promise<Partial<ICourse> | null> {
    try {
      return await Course.findOne({ uri }, extractFields).lean().exec();
    } catch (error) {
      return error;
    }
  }

  // Create a new Course
  async createCourse(CourseData: ICourse): Promise<Partial<ICourse>> {
    try {
      const newCourse = new Course(CourseData);
      const res = await newCourse.save();
      return res;
    } catch (error) {
      throw new Error(`Error creating Course: ${error.message}`);
    }
  }

  // Update a Course
  async updateCourse(CourseId: string, updatedData: Partial<ICourse>): Promise<Partial<ICourse> | null> {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(CourseId, updatedData, {
        new: true,
      }).exec();
      console.log('updatedCourse: ', updatedCourse);
      return updatedCourse;
    } catch (error) {
      throw new Error(`Error updating Course ${CourseId}: ${error.message}`);
    }
  }

  // Delete a Course
  async deleteCourse(CourseId: string): Promise<Partial<ICourse> | null> {
    try {
      const deletedCourse = await Course.findByIdAndRemove(CourseId).exec();
      console.log('deletedCourse: ', deletedCourse);
      return deletedCourse;
    } catch (error) {
      throw new Error(`Error deleting Course ${CourseId}: ${error.message}`);
    }
  }

  // Other methods related to Courses (e.g., search, login, password reset, etc.)
}
