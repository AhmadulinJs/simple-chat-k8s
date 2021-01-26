import mongoose, { Schema, Document } from 'mongoose';
export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  chats: string;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  chats: [{
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  }]
},
  {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  });

export default mongoose.model<IUser>('User', UserSchema);