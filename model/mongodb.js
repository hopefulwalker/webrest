// Bring Mongoose into the project
var mongoose = require('mongoose');
// connect options.
var opts = {
    server: {
        socketOptions: {keepAlive: 1}
    }
};
// Build the connection string
var dbURI = 'mongodb://localhost/mongoosedb';
// Create the database connection

// switch(app.get('env')){
//     case 'development':
//         mongoose.connect(credentials.mongo.development.connectionString, opts);
//         break;
//     case 'production':
//         mongoose.connect(credentials.mongo.production.connectionString, opts);
//         break;
//     default:
//         throw new Error('Unknown execution environment: ' + app.get('env'));
// }
mongoose.connect(dbURI, opts);

// catching the events.
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

