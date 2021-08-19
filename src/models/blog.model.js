const { Schema, model } = require('mongoose');

const BlogSchema = Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    view:{
        type: Number,
    },
    reading: {
        type: Number,
    },
    likes: {
        type: Number,
        default: 0
    },
    slug: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: false
    },
    img: {
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
},{ collection: 'blogs' });

BlogSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Blog', BlogSchema);
