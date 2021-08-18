const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: [
        {
            type: String
        },
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'Seller',
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
    },
    slug: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    code: {
        type: String,
    },
    tags: [
        {
            type: String
        },
    ],
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},{ collecion: 'products' });

ProductSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    //object.uid = _id;
    return object;
});


module.exports = model('Product', ProductSchema);