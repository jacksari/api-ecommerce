const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const DirectionSchema = Schema({
    department: {
        type: String,
    },
    cities: {
        type: String,
    },
    districts: {
        type: String,
    },
    direction: {
        type: String,
    },
    refer:{
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

DirectionSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

DirectionSchema.plugin(mongoosePaginate);



module.exports = model('Direction', DirectionSchema);