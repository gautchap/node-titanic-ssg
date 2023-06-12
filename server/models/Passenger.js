import mongoose from "mongoose";
import PassengerSchema from "./PassengerSchema.js";

class Passengers {
    constructor() {
        this.db = mongoose.model("passengers", PassengerSchema);
    }

    async find(search = {}) {
        try {
            return await this.db.find(search);
        } catch (error) {
            return error;
        }
    }
}

export default Passengers;
