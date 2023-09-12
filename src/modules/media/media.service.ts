import Media from './media.model';
import IMedia from './media.interface';
import { generateUploadURL } from '../../services/uploadService_v3';
import { preSignedBody } from './dto';

export class MediaService {
  async getMedia(): Promise<Partial<IMedia[]> | undefined> {
    try {
      const media = await Media.find({}).lean().exec();
      console.log('getMedia: ', media);
      return media;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Media by their ID
  async getMediaById(MediaId: string): Promise<Partial<IMedia> | null> {
    try {
      const media = await Media.findById(MediaId).lean().exec();
      console.log('getMediaById: ', media);
      return media;
    } catch (error) {
      return error;
    }
  }

  // Create a new Media
  async createMedia(MediaData: IMedia): Promise<Partial<IMedia>> {
    try {
      const newMedia = new Media(MediaData);
      const res = await newMedia.save();
      console.log('createMedia: ', res);
      return res;
    } catch (error) {
      throw new Error(`Error creating Media: ${error.message}`);
    }
  }

  async createManyMediaObjs(MediaData: IMedia[]): Promise<Partial<IMedia>[]> {
    try {
      const results = await Media.insertMany(MediaData, { ordered: true });
      console.log('createMedia: ', results);
      return results;
    } catch (error) {
      throw new Error(`Error creating Media: ${error.message}`);
    }
  }

  async generateUploadURL(body: preSignedBody): Promise<string> {
    try {
      const uploadURL: string = await generateUploadURL(body);
      console.log('Generated pre-signed URL:', uploadURL);
      return uploadURL;
    } catch (error) {
      console.log('Error generating pre-signed URL', error);
      throw error;
    }
  }

  // Update a Media
  async updateMedia(MediaId: string, updatedData: Partial<IMedia>): Promise<Partial<IMedia> | null> {
    try {
      const updatedMedia = await Media.findByIdAndUpdate(MediaId, updatedData, {
        new: true,
      }).exec();
      console.log('updatedMedia: ', updatedMedia);
      return updatedMedia;
    } catch (error) {
      throw new Error(`Error updating Media ${MediaId}: ${error.message}`);
    }
  }

  // Delete a Media
  async deleteMedia(MediaId: string): Promise<Partial<IMedia> | null> {
    try {
      const deletedMedia = await Media.findByIdAndRemove(MediaId).exec();
      console.log('deletedMedia: ', deletedMedia);
      return deletedMedia;
    } catch (error) {
      throw new Error(`Error deleting Media ${MediaId}: ${error.message}`);
    }
  }

  // Other methods related to Media (e.g., search, login, password reset, etc.)
}
