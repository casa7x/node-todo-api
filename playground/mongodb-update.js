const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todoapp');
    const userDb = client.db('Users');
    //
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5aab7a6939409bccbd47f98b')
    // }, {
    //     $set: {
    //         complete: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => console.log(result));
    userDb.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aaa4d6ad603e01499fa6b4f')
    }, {
        $set: {
            name: 'Arkadiy'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(result => console.log(result));


    client.close();
});