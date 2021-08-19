const { Schema, model } = require('mongoose');

const CouponSchema = Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    description: {
        type: String,
        required: true
    },
    time_init: {
        type: Date,
        default: Date.now()
    },
    duration: {
        type: Number,
        default: 7
    },
    cantidad: {
        type: Number,
        default: 10
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
},{ collection: 'coupons' });

CouponSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Coupon', CouponSchema);
