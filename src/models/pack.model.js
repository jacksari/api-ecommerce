const { Schema, model } = require('mongoose');

const PackSchema = Schema({
    product: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
    stock:{
        type: Number,
        default: 0
    },
    code: {
        type: String,
    },
    ofert: {
        type: Number,
        default: 10
    },
    description: {
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
},{ collecion: 'packs' });

PackSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Pack', PackSchema);