const { Schema, model } = require('mongoose');

const CurrencySchema = Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    code: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},{ collection: 'currencies' });

CurrencySchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    //object.uid = _id;
    return object;
});


module.exports = model('Currency', CurrencySchema);
