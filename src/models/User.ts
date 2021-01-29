import mongoose, { Schema, Document, HookNextFunction } from 'mongoose';
import { genSalt, hash, compare } from 'bcryptjs'
export interface IUser extends Document {
	email: string;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	chats: string;
}

const UserSchema: any = new Schema({
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
	username: {
		type: String,
	},
	password: {
		type: String,
		hidden: true

	},
	chats: [{
		type: Schema.Types.ObjectId,
		ref: 'Chat'
	}]
},
	{
		versionKey: false,
		timestamps: true,
		toObject: {
			virtuals: true,
		},
		toJSON: {
			virtuals: true,
		},
	});

UserSchema.pre('save', async function (next: HookNextFunction) {

	try {
		if (this.password) {
			const salt: string = await genSalt(10)
			const hashedPassword: string = await hash(this.password, salt)
			if (hashedPassword) {
				this.password = hashedPassword
			}
		}
		next()
	} catch (e) {
		next(e)
		throw new Error(`User password hashing error: ${e}`)
	}

})

UserSchema.pre('init', function (next) {
	console.log('ITINIT')
	console.log(this)
	console.log('ITINIT')
})
export default mongoose.model<IUser>('User', UserSchema);