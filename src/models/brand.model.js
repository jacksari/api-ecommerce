const { Schema, model } = require('mongoose');

const BrandSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    slug: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},{ collection: 'brands' });

BrandSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    //object.uid = _id;
    return object;
});


module.exports = model('Brand', BrandSchema);
