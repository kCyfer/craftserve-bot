import Mongose from 'mongoose';

export default() => {
    Mongose.connect(process.env.MONGO_URL, {
        dbName: process.env.MONGO_DATABASE,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });

    Mongose.connection.on("error", console.error.bind(console, "Connection error:"));
    Mongose.connection.once("open", () => {
        console.log("Connected to Database.");
    });
    return Mongose.connection;
};