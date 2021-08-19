const { Schema, model } = require('mongoose');

const WishListSchema = Schema({
    product: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},{ collection: 'wish_lists' });

WishListSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('WishList', WishListSchema);
