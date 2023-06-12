import mongoose from "mongoose";
import UserSchema from "./UserSchema.js";

class User {
    constructor() {
        this.db = mongoose.model("User", UserSchema);
    }

    async emailExists(email) {
        try {
            return (await this.db.findOne({ email })) ? true : false;
        } catch (error) {
            return error;
        }
    }

    async add(userEntity) {
        try {
            return await this.db.create(userEntity);
        } catch (error) {
            return error;
        }
    }

    async getUserByEmail(email) {
        try {
            return await this.db.findOne({ email });
        } catch (error) {
            return error;
        }
    }
}
export default User;
