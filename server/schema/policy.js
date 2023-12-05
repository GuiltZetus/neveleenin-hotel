const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    hotelID: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Hotel"
    },
    policyName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;