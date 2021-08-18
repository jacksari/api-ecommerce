const { Schema, model } = require('mongoose');

const ReviewSchema = Schema({
    comment: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},{ collecion: 'reviews' });

ReviewSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Review', ReviewSchema);