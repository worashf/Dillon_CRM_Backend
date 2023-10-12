const mongoose = require("mongoose");
const Schema = mongoose.Schema

const leadSchema = mongoose.Schema({
    lead_name: { type: String, required: true },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
        required: true
    },
    sale_person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    status: {
        type: String,
        enum: [
            "new",
            "qualified",
            "nurturing",
            "opportunity",
            "closed won",
            "closed lost"
        ]
    },
    messages: [{
        sender: { type: String, required: true },
        timestamp: { type: Date, required: true },
        body: { type: String, required: true },
        message_type: {
            type: String,
            enum: ["INBOUND",
                "OUTBOUND",]
        }
    }
    ],
    schedules: [{
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
        description: { type: String, required: true }
    }],
    description:{type: String, },
    createdAt: { type: Date, default: Date.now(), },
    updatedAt: { type: Date, default: Date.now() }


})


module.exports = mongoose.model("lead", leadSchema);