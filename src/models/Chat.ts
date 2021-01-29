import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuid } from 'uuid'
export interface IChat extends Document {
  author: string;
  members: string[];
}

const Chatchema: Schema = new Schema({
  author: {
    type: String,
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  type: {
    type: String,
    enum: ['group', 'personal'],
  }
},
  {
    timestamps: {},
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  });

export default mongoose.model<IChat>('User', Chatchema);