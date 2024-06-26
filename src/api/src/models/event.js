import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        organizer: {
            type: String,
        },
        participants: 
            {
                type: String
            },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("Event", eventSchema);