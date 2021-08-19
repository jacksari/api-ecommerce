const { Schema, model } = require('mongoose');

const InventorySchema = Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    stock:{
        type: Number,
        default: 0
    },
    move: {
        type: String,
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
},{ collection: 'inventories' });

InventorySchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Inventory', InventorySchema);
