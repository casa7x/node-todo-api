const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todoapp');
    const userDb = client.db('Users');

    // db.collection('Todos').find({_id: new ObjectID('5aaa3f37d603e01499fa67dd')}).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    userDb.collection('Users').find({name: "Sasha"}).count().then( (count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch users', err)
    });


    client.close();
});