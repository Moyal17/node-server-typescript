import Lead from './lead.model'; // Assuming you have a Mongoose model for Lead
import ILead from './lead.interface';
import { basicFields as leadFields } from './dto';

export class LeadService {
  async getLeads(query: object, extractFields: string = leadFields, limit: number = 30): Promise<Partial<ILead[]> | null> {
    try {
      return await Lead.find(query, extractFields).limit(limit).lean().exec();
    } catch (error) {
      return error;
    }
  }

  async getAdminLeads(query: object, extractFields: string = leadFields, limit: number = 30): Promise<Partial<ILead[]> | null> {
    try {
      return await Lead.find(query, extractFields).limit(limit).lean().exec();
    } catch (error) {
      return error;
    }
  }

  // Fetch a lead by their ID
  async getLeadById(leadId: string): Promise<Partial<ILead> | null> {
    try {
      return await Lead.findById(leadId).exec();
    } catch (error) {
      return error;
    }
  }

  // Create a new lead
  async createLead(leadData: ILead): Promise<Partial<ILead>> {
    try {
      const newLead = new Lead(leadData);
      return await newLead.save();
    } catch (error) {
      throw new Error(`Error creating lead: ${error.message}`);
    }
  }

  // Update a lead
  async updateLead(leadId: string, updatedData: Partial<ILead>): Promise<Partial<ILead> | null> {
    try {
      return await Lead.findByIdAndUpdate(leadId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating lead ${leadId}: ${error.message}`);
    }
  }

  // Delete a lead
  async deleteLead(leadId: string): Promise<Partial<ILead> | null> {
    try {
      return await Lead.findByIdAndRemove(leadId).exec();
    } catch (error) {
      throw new Error(`Error deleting lead ${leadId}: ${error.message}`);
    }
  }

  // Other methods related to leads (e.g., search, login, password reset, etc.)
}
