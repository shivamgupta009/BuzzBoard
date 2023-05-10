const mongoose = require('mongoose');
const schema = mongoose.Schema;


const orderSchema = new schema({
    orderId: {
        type: Number,
    },

    itemName: {
        type: String,
    },
    cost: {
        type: Number,
    },
    order_date: {
        type: Date,
    },
    delivery_date: {
        type: Date,
    },
   
}, {
    timestamps: true
});

module.exports = mongoose.model("order", orderSchema)


