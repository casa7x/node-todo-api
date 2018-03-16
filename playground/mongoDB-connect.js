const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todoapp');
    const userDb = client.db('Users');

    // db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    userDb.collection('Users').insertOne({
        name: 'Vitali',
        age: '26',
        location: 'Minsk'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    client.close();
});

//c:\Program Files\MongoDB\Server\3.6\bin>mongod.exe