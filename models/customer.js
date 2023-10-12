const mongoose = require('mongoose');


const customerSchema = mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    company_name: {type:String, required: true},
    company_website: {type: String, required: true},
    createdAt: { type: Date, default: Date.now(), },
    updatedAt: { type: Date, default: Date.now() }

})


module.exports = mongoose.model("customer", customerSchema);



