const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schemaHelper = require('./../helpers/schema');

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    imageUrl: { type: String }
});

schemaHelper.addVirtualId(UserSchema);
schemaHelper.addToJsonOrObject(UserSchema);
schemaHelper.addTransforms(UserSchema);

module.exports = mongoose.model('User', UserSchema);