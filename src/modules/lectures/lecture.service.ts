import Lecture from './lecture.model'; // Assuming you have a Mongoose model for Lecture
import ILecture from './lecture.interface'; // Assuming you have a Mongoose model for Lecture

export class LectureService {
  async getLectures(): Promise<Partial<ILecture[]> | null> {
    try {
      const lectures = await Lecture.find({}).exec();
      console.log('getLectures: ', lectures);
      return lectures;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Lecture by their ID
  async getLectureById(lectureId: string): Promise<Partial<ILecture> | null> {
    try {
      const lecture = await Lecture.findById(lectureId).lean().exec();
      console.log('getLectureByUri: ', lecture);
      return lecture;
    } catch (error) {
      return error;
    }
  }

  // Create a new Lecture
  async createLecture(LectureData: ILecture): Promise<Partial<ILecture>> {
    try {
      const newLecture = new Lecture(LectureData);
      const res = await newLecture.save();
      return res;
    } catch (error) {
      throw new Error(`Error creating Lecture: ${error.message}`);
    }
  }

  // Update a Lecture
  async updateLecture(LectureId: string, updatedData: Partial<ILecture>): Promise<Partial<ILecture> | null> {
    try {
      const updatedLecture = await Lecture.findByIdAndUpdate(LectureId, updatedData, {
        new: true,
      }).exec();
      console.log('updatedLecture: ', updatedLecture);
      return updatedLecture;
    } catch (error) {
      throw new Error(`Error updating Lecture ${LectureId}: ${error.message}`);
    }
  }

  // Delete a Lecture
  async deleteLecture(LectureId: string): Promise<Partial<ILecture> | null> {
    try {
      const deletedLecture = await Lecture.findByIdAndRemove(LectureId).exec();
      console.log('deletedLecture: ', deletedLecture);
      return deletedLecture;
    } catch (error) {
      throw new Error(`Error deleting Lecture ${LectureId}: ${error.message}`);
    }
  }

  // Other methods related to Lectures (e.g., search, login, password reset, etc.)
}
