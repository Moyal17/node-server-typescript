import mongoose, { Schema } from 'mongoose';
import { LeadSourceEnum, LeadStatusEnum } from './dto';
import { GenderEnum } from '../shared/enums';

const leadSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: {
    type: String,
    enum: Object.values(GenderEnum),
    default: GenderEnum.MALE,
    required: true,
  },
  email: { type: String, required: true },
  phone: { type: String },
  contactPreference: {
    type: String,
    enum: ['email', 'phone'],
    required: true,
  },
  source: {
    type: String,
    enum: Object.values(LeadSourceEnum),
    default: LeadSourceEnum.WEBSITE,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(LeadStatusEnum),
    default: LeadStatusEnum.NEW,
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  interest: { type: String }, // e.g., specific product or service they are interested in
  notes: { type: String }, // any additional notes about the lead
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;
