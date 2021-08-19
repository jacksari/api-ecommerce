const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    },
    facebook: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: false
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String
    },
    directions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Direction',
        }
    ],
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},{ collection: 'users' });

UserSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

UserSchema.plugin(mongoosePaginate);



module.exports = model('User', UserSchema);
