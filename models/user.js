const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: 'string',
        default: ''
    },
    lastname: {
        type: 'string',
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    },
    facebookId: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);