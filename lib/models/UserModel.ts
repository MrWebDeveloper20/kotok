import mongoose from "mongoose";

export type User = {
  _id: string
  name: string
  family: string
  melliCode: number
  mobile: number
  email: string
  isAdmin: boolean
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    family: {
      type: String,
      required: true,
    },
    melliCode: {
      type: Number,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
)

const UserModel = mongoose.models?.User || mongoose.model('User', UserSchema)

export default UserModel