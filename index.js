const mongoose = require('mongoose');
const Users = require('./models/Users');

mongoose.Promise = global.Promise;

// DRIVER://HOST:PORT/DB
mongoose.createConnection('mongodb://localhost:27017/data', {
    useMongoClient: true
}).then(
    db => {
        console.log("Connected on 27017");
        
        // DEMARRAGE DE L'APPLICATION

        const users = db.model('Users');

        // Création de données
        // users.create([
        //     {
        //         email: 'john.doe@domain.tld',
        //         firstname: 'John',
        //         lastname: 'Doe',
        //         password: 'password'
        //     },
        //     {
        //         email: 'jane.doe@domain.tld',
        //         firstname: 'John',
        //         lastname: 'Doe',
        //         password: 'password'
        //     }
        // ]).then(
        //     result => console.log(result)
        // ).catch(e => console.log(e));

        // Récupération de données
        // users.find({email: 'jane.doe@domain.tld'}, { password: 0 }).then(
        //     results => console.log(results)
        // ).catch(e => console.log(e));
    }
).catch(e => console.log(e));

