import mongoose from "mongoose";

const PassengerSchema = mongoose.Schema(
    {
        PassengerId: { type: Number },
        Survived: { type: Number },
        Pclass: { type: Number },
        Name: { type: String },
        Sex: { type: String },
        Age: { type: Number },
        SibSp: { type: Number },
        Parch: { type: Number },
        Ticket: { type: String },
        Fare: { type: Number },
        Cabin: { type: String },
        Embarked: { type: String },
    },
    { versionKey: false }
);

export default PassengerSchema;
