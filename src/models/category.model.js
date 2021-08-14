const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
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
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},{ collecion: 'categories' });

CategorySchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    //object.uid = _id;
    return object;
});


module.exports = model('Category', CategorySchema);