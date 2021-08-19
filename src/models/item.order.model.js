const { Schema, model } = require('mongoose');

const ItemOrderSchema = Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    qty: {
        type: Number
    },
    status: {
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
},{ collection: 'items_order' });

ItemOrderSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('ItemOrder', ItemOrderSchema);
