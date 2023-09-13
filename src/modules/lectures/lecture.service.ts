import Lecture from './lecture.model';
import ILecture from './lecture.interface';

export class LectureService {
  async getLectures(query = {}): Promise<Partial<ILecture[]> | null> {
    try {
      return await Lecture.find(query).lean().exec();
    } catch (error) {
      return error;
    }
  }
  // Fetch a Lecture by their ID
  async getLectureById(lectureId: string): Promise<Partial<ILecture> | null> {
    try {
      return await Lecture.findById(lectureId).lean().exec();
    } catch (error) {
      return error;
    }
  }

  async getLectureByUri(uri: string): Promise<Partial<ILecture> | null> {
    try {
      return await Lecture.findOne({ uri }).lean().exec();
    } catch (error) {
      return error;
    }
  }
  // Create a new Lecture
  async createLecture(LectureData: ILecture): Promise<Partial<ILecture>> {
    try {
      const newLecture = new Lecture(LectureData);
      return await newLecture.save();
    } catch (error) {
      throw new Error(`Error creating Lecture: ${error.message}`);
    }
  }
  async createMultiLectures(Lectures: ILecture[]): Promise<Partial<ILecture>[]> {
    try {
      return await Lecture.insertMany(Lectures, { ordered: true });
    } catch (error) {
      throw new Error(`Error creating Lecture: ${error.message}`);
    }
  }

  // Update a Lecture
  async updateLecture(LectureId: string, updatedData: Partial<ILecture>): Promise<Partial<ILecture> | null> {
    try {
      return await Lecture.findByIdAndUpdate(LectureId, updatedData, { new: true }).exec();
    } catch (error) {
      throw new Error(`Error updating Lecture ${LectureId}: ${error.message}`);
    }
  }

  // Delete a Lecture
  async deleteLecture(LectureId: string): Promise<Partial<ILecture> | null> {
    try {
      return await Lecture.findByIdAndRemove(LectureId).exec();
    } catch (error) {
      throw new Error(`Error deleting Lecture ${LectureId}: ${error.message}`);
    }
  }

  // Other methods related to Lectures (e.g., search, login, password reset, etc.)
}
