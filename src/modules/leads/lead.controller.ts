import { Request, Response } from 'express';
import { LeadService } from './lead.service';
import { CategoryService } from '../categories/category.service';
import { generateId } from '../../utils';
import { getPaginationParams } from '../shared/utils';
import { ExtendedRequest, QueryType } from '../shared/types';
import { basicFields } from './dto';
import { categoryGroupEnum } from '../categories/dto';
const leadService = new LeadService();
const categoryService = new CategoryService();

const configLeadObject = (leadBody: any) => {
  try {
    if (leadBody.authorName || leadBody.authorAvatar || leadBody.authorProfession) {
      leadBody.author = {
        name: leadBody.authorName,
        avatar: leadBody.authorAvatar,
        profession: leadBody.authorProfession,
      };
    }
    return leadBody;
  } catch (e) {
    console.error('configCourseObject: ', e);
  }
};

export const getLeads = async (req: ExtendedRequest, res: Response) => {
  try {
    const { cursor, limit } = getPaginationParams(req.query);
    const query: QueryType = req.isPublic ? { isPublic: true, isRemoved: false } : { isRemoved: false };
    if (cursor) {
      query['_id'] = { $gt: cursor };
    }
    const leads = await leadService.getLeads(query, basicFields, limit);
    if (!leads) {
      return res.status(404).json({ message: 'leads not found' });
    }
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: 'getLeads', message: error.message });
  }
};

export const getLeadById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const lead = await leadService.getLeadById(id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: 'getLeadByUri', message: error.message });
  }
};

export const getLeadCategories = async (req: Request, res: Response) => {
  try {
    const searchQuery = { group: categoryGroupEnum.LEADS, isRemoved: false };
    const categories = await categoryService.getCategories(searchQuery);
    if (!categories) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json({ blog: categories });
  } catch (error) {
    res.status(500).json({ error: 'getFullLeadByUri', message: error.message });
  }
};

export const createLead = async (req: Request, res: Response) => {
  try {
    const leadBody = configLeadObject({ ...req.body });
    leadBody.uri = `${leadBody.uri}-${generateId(6)}`;
    const lead = await leadService.createLead(leadBody);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: 'createLead', message: error.message });
  }
};
export const updateLead = async (req: Request, res: Response) => {
  try {
    const leadId = req.params.id;
    const leadBody = configLeadObject({ ...req.body });
    delete leadBody._id;
    const lead = await leadService.updateLead(leadId, req.body);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json();
  } catch (error) {
    res.status(500).json({ error: 'updateLead', message: error.message });
  }
};
export const deleteLead = async (req: Request, res: Response) => {
  try {
    const leadId = req.params.id;
    const lead = await leadService.deleteLead(leadId);
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: 'deleteLead', message: error.message });
  }
};

// ... more routes for creating, updating, deleting leads
