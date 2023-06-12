import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        email: { type: String },
        password: { type: String },
        date: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

export default UserSchema;
