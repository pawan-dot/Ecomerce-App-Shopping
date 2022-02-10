const app = require("./app");
const connectDatabase = require("./config/database");
const port = 5000;

// Handling Uncaught Exception like console.log(you tube) we not define you tube
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

//console.log(youtube)
require("dotenv").config({ path: "backend/config/config.env" });


// Connecting to database
connectDatabase();

const server = app.listen(port, () => {
    console.log(`Server  is working on http://localhost:${port}`);
});


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});