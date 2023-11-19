import Media from './media.model';
import IMedia from './media.interface';
import { generateUploadURL } from '../../services/uploadService_v3';
import { PreSignedBody } from './dto';

export class MediaService {
  async getMedia(): Promise<Partial<IMedia[]> | undefined> {
    try {
      const media = await Media.find({}).lean().exec();
      return media;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Media by their ID
  async getMediaById(MediaId: string): Promise<Partial<IMedia> | null> {
    try {
      const media = await Media.findById(MediaId).lean().exec();
      return media;
    } catch (error) {
      return error;
    }
  }

  // Create a new Media
  async createMedia(MediaData: Partial<IMedia>): Promise<Partial<IMedia>> {
    try {
      const newMedia = await new Media(MediaData).save();
      const { _id, name, source, thumbnail, type, size, mediaType } = newMedia.toObject();
      return { _id, name, source, thumbnail, type, size, mediaType };
    } catch (error) {
      throw new Error(`Error creating Media: ${error.message}`);
    }
  }

  async createManyMediaObjs(MediaData: IMedia[]): Promise<Partial<IMedia>[]> {
    try {
      const results = await Media.insertMany(MediaData, { ordered: true });
      return results.map((obj) => {
        const { _id, name, source, thumbnail, type, size, mediaType, width, height, duration } = obj;
        return { _id, name, source, thumbnail, type, size, mediaType, width, height, duration };
      });
    } catch (error) {
      throw new Error(`Error creating Media: ${error.message}`);
    }
  }

  async generateUploadURL(body: PreSignedBody): Promise<string> {
    try {
      return await generateUploadURL(body);
    } catch (error) {
      console.log('Error generating pre-signed URL', error);
      throw error;
    }
  }

  // Update a Media
  async updateMedia(MediaId: string, updatedData: Partial<IMedia>): Promise<Partial<IMedia> | null> {
    try {
      return await Media.findByIdAndUpdate(MediaId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Media ${MediaId}: ${error.message}`);
    }
  }

  // Delete a Media
  async deleteMedia(MediaId: string): Promise<Partial<IMedia> | null> {
    try {
      return await Media.findByIdAndRemove(MediaId).exec();
    } catch (error) {
      throw new Error(`Error deleting Media ${MediaId}: ${error.message}`);
    }
  }

  // Other methods related to Media (e.g., search, login, password reset, etc.)
}
