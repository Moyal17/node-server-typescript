import mongoose from 'mongoose';
import { GenderEnum } from '../../shared/enums';

export enum LeadStatusEnum {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  LOST = 'lost',
  CONVERTED = 'converted',
}

export enum LeadSourceEnum {
  WEBSITE = 'website',
  REFERRAL = 'referral',
  EVENT = 'event',
}

export type LeadObject = {
  _id?: mongoose.Types.ObjectId | string;
  firstName?: string;
  lastName?: string;
  gender?: string | GenderEnum;
  email?: string;
  phone?: string;
  contactPreference?: string;
  source?: string | LeadSourceEnum;
  status?: string | LeadStatusEnum;
  category?: mongoose.Types.ObjectId | string;
  interest?: string; // e.g., specific product or service they are interested in
  notes?: string; // any additional notes about the lead
  isRemoved: boolean;
  createdAt?: Date;
};

export const allFields =
  'firstName lastName gender email phone contactPreference source status category interest notes isRemoved createdAt';
export const basicFields = 'firstName lastName source status category interest notes';
