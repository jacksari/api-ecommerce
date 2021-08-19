const { Schema, model } = require('mongoose');

const OrderSchema = Schema({
    code: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    description: {
        type: String,
        required: true
    },
    direction: {
        type: Schema.Types.ObjectId,
        ref: 'Direction',
    },
    total: {
        type: Number
    },
    shipping: {
        type: Number
    },
    status: {
        type: String,
        default: false
    },
    key: {
        type: String,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},{ collection: 'orders' });

OrderSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Order', OrderSchema);
