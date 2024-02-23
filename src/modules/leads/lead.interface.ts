import mongoose from 'mongoose';
import { LeadSourceEnum, LeadStatusEnum } from './dto';
import { GenderEnum } from '../shared/enums';
import { AllowNullProperty } from '../shared/types';

interface ILead {
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
  isRemoved?: boolean;
  createdAt?: Date;
}
type NullableILead = AllowNullProperty<ILead>;

export default NullableILead;
