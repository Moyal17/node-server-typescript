import Section from './section.model'; // Assuming you have a Mongoose model for Section
import ISection from './section.interface'; // Assuming you have a Mongoose model for Section

export class SectionService {
  async getSections(): Promise<Partial<ISection[]> | null> {
    try {
      const sections = await Section.find({}).exec();
      console.log('getSections: ', sections);
      return sections;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Section by their ID
  async getSectionById(sectionId: string): Promise<Partial<ISection> | null> {
    try {
      const section = await Section.findById(sectionId).lean().exec();
      console.log('getSectionByUri: ', section);
      return section;
    } catch (error) {
      return error;
    }
  }

  // Create a new Section
  async createSection(SectionData: ISection): Promise<Partial<ISection>> {
    try {
      const newSection = new Section(SectionData);
      const res = await newSection.save();
      console.log('createSection: ', res);
      return res;
    } catch (error) {
      throw new Error(`Error creating Section: ${error.message}`);
    }
  }

  // Update a Section
  async updateSection(SectionId: string, updatedData: Partial<ISection>): Promise<Partial<ISection> | null> {
    try {
      const updatedSection = await Section.findByIdAndUpdate(SectionId, updatedData, {
        new: true,
      }).exec();
      console.log('updatedSection: ', updatedSection);
      return updatedSection;
    } catch (error) {
      throw new Error(`Error updating Section ${SectionId}: ${error.message}`);
    }
  }

  // Delete a Section
  async deleteSection(SectionId: string): Promise<Partial<ISection> | null> {
    try {
      const deletedSection = await Section.findByIdAndRemove(SectionId).exec();
      console.log('deletedSection: ', deletedSection);
      return deletedSection;
    } catch (error) {
      throw new Error(`Error deleting Section ${SectionId}: ${error.message}`);
    }
  }

  // Other methods related to Sections (e.g., search, login, password reset, etc.)
}
