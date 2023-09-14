import Page from './page.model';
import IPage from './page.interface';

export class PageService {
  async getPages(): Promise<Partial<IPage[]> | null> {
    try {
      const pages = await Page.find({}).exec();

      return pages;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Page by their ID
  async getPageByUri(uri: string): Promise<Partial<IPage> | null> {
    try {
      const page = await Page.findOne({ uri }).lean().exec();

      return page;
    } catch (error) {
      return error;
    }
  }

  // Create a new Page
  async createPage(PageData: IPage): Promise<Partial<IPage>> {
    try {
      const newPage = new Page(PageData);
      const res = await newPage.save();
      return res;
    } catch (error) {
      throw new Error(`Error creating Page: ${error.message}`);
    }
  }

  // Update a Page
  async updatePage(PageId: string, updatedData: Partial<IPage>): Promise<Partial<IPage> | null> {
    try {
      const updatedPage = await Page.findByIdAndUpdate(PageId, updatedData, {
        new: true,
      }).exec();
      return updatedPage;
    } catch (error) {
      throw new Error(`Error updating Page ${PageId}: ${error.message}`);
    }
  }

  // Delete a Page
  async deletePage(PageId: string): Promise<Partial<IPage> | null> {
    try {
      const deletedPage = await Page.findByIdAndRemove(PageId).exec();

      return deletedPage;
    } catch (error) {
      throw new Error(`Error deleting Page ${PageId}: ${error.message}`);
    }
  }

  // Other methods related to Pages (e.g., search, login, password reset, etc.)
}
