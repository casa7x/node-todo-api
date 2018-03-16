const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todoapp');
    const userDb = client.db('Users');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'to order sushi'}).then((result) => {
    //     console.log(result);
    // });

    userDb.collection('Users').deleteMany({name: 'Egor'}).then( result => console.log(result));
    // deleteOne

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })


    client.close();
});