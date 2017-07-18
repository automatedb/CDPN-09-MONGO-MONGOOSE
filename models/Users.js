const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

// Création de schema MongoDB
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String
});

// Méthode executé avant l'enregistrement
UserSchema.pre('save', function(next) {
    console.log('Pre save');
    bcrypt.hash(this.password, 10).then(
        result => {
            this.password = result;

            next();
        }
    );
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;