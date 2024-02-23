import Section from './section.model';
import ISection from './section.interface';
import { basicFields } from './dto';

export class SectionService {
  async getSections(query = {}, extractFields: string = basicFields): Promise<Partial<ISection[]> | null> {
    try {
      return await Section.find(query, extractFields).lean().exec();
    } catch (error) {
      return error;
    }
  }

  // Fetch a Section by their ID
  async getSectionById(sectionId: string, extractFields: string = basicFields): Promise<Partial<ISection> | null> {
    try {
      return await Section.findById(sectionId, extractFields).lean().exec();
    } catch (error) {
      return error;
    }
  }

  // Create a new Section
  async createSection(SectionData: ISection): Promise<Partial<ISection>> {
    try {
      const newSection = new Section(SectionData);
      return await newSection.save();
    } catch (error) {
      throw new Error(`Error creating Section: ${error.message}`);
    }
  }

  // Update a Section
  async updateSection(SectionId: string, updatedData: Partial<ISection>): Promise<Partial<ISection> | null> {
    try {
      return await Section.findByIdAndUpdate(SectionId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Section ${SectionId}: ${error.message}`);
    }
  }

  async archiveSection(SectionId: string): Promise<Partial<ISection> | null> {
    try {
      return await Section.findByIdAndUpdate(SectionId, { isRemoved: true }).exec();
    } catch (error) {
      throw new Error(`Error deleting Section ${SectionId}: ${error.message}`);
    }
  }

  async unArchiveSection(SectionId: string): Promise<Partial<ISection> | null> {
    try {
      return await Section.findByIdAndUpdate(SectionId, { isRemoved: false }).exec();
    } catch (error) {
      throw new Error(`Error deleting Section ${SectionId}: ${error.message}`);
    }
  }

  // Delete a Section
  async deleteSection(SectionId: string): Promise<Partial<ISection> | null> {
    try {
      return await Section.findByIdAndDelete(SectionId).exec();
    } catch (error) {
      throw new Error(`Error deleting Section ${SectionId}: ${error.message}`);
    }
  }
  // Other methods related to Sections (e.g., search, login, password reset, etc.)
}
